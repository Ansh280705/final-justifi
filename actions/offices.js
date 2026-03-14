"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { officeSchema } from "@/lib/schema";

// ─── Geocode address → lat/lng using OpenStreetMap (free, no API key) ───
export async function geocodeAddress(address, city, state, pincode) {
  const headers = {
    "User-Agent": "Justifi-ClinicFinder/1.0 (JustifiOfficial@gmail.com)",
    "Accept-Language": "en",
  };

  // Try progressively simpler queries until one works
  const queries = [
    `${address}, ${city}, ${state}, ${pincode}, India`,   // Full address
    `${city}, ${pincode}, ${state}, India`,                // City + pincode
    `${city}, ${state}, India`,                            // City + state only
  ];

  for (const q of queries) {
    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1&countrycodes=in`;
      const res = await fetch(url, { headers });
      const data = await res.json();
      if (data.length > 0) {
        return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
      }
    } catch {
      // try next query
    }
  }
  return null;
}

// ─── Add office (Admin only) ───
export async function addOffice(formData) {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  const validated = officeSchema.safeParse(formData);
  if (!validated.success) {
    return { success: false, error: validated.error.errors[0].message };
  }

  const { name, lawyerName, practiceArea, phone, email, address, city, state, pincode, timing } = validated.data;

  const user = await db.user.findUnique({ where: { clerkUserId: userId } });
  if (user?.role !== "ADMIN") return { success: false, error: "Admins only" };

  try {
    // 1. Use manual GPS coordinates if admin used "Use My Location" button
    // 2. Otherwise fall back to Nominatim geocoding from address
    let geo = null;
    if (formData.manualLat && formData.manualLng) {
      geo = { lat: parseFloat(formData.manualLat), lng: parseFloat(formData.manualLng) };
    } else {
      geo = await geocodeAddress(formData.address, formData.city, formData.state, formData.pincode);
    }

    const office = await db.offlineOffice.create({
      data: {
        name:        name.trim(),
        lawyerName:  lawyerName.trim(),
        practiceArea: practiceArea.trim(),
        phone:       phone.trim(),
        email:       email?.trim() || null,
        address:     address.trim(),
        city:        city.trim(),
        state:       state.trim(),
        pincode:     pincode.trim(),
        timing:      timing.trim(),
        latitude:    geo?.lat ?? 0,
        longitude:   geo?.lng ?? 0,
      },
    });

    revalidatePath("/admin");
    revalidatePath("/find-office");
    return { success: true, office, geocoded: !!geo };
  } catch (error) {
    console.error("addOffice error:", error);
    return { success: false, error: "Failed to add office" };
  }
}

// ─── Toggle active/inactive ───
export async function toggleOfficeStatus(id, isActive) {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  const user = await db.user.findUnique({ where: { clerkUserId: userId } });
  if (user?.role !== "ADMIN") return { success: false, error: "Admins only" };

  try {
    await db.offlineOffice.update({ where: { id }, data: { isActive } });
    revalidatePath("/admin");
    revalidatePath("/find-office");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to update office" };
  }
}

// ─── Delete office ───
export async function deleteOffice(id) {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  const user = await db.user.findUnique({ where: { clerkUserId: userId } });
  if (user?.role !== "ADMIN") return { success: false, error: "Admins only" };

  try {
    await db.offlineOffice.delete({ where: { id } });
    revalidatePath("/admin");
    revalidatePath("/find-office");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to delete office" };
  }
}

// ─── Get all offices (for admin) ───
export async function getAllOffices() {
  try {
    const offices = await db.offlineOffice.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, offices };
  } catch {
    return { success: true, offices: [] };
  }
}

// ─── Get active offices (for clients) ───
export async function getActiveOffices() {
  try {
    const offices = await db.offlineOffice.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, offices };
  } catch {
    return { success: true, offices: [] };
  }
}

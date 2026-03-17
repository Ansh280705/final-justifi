"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createFirm(data) {
  try {
    const firm = await db.lawFirm.create({
      data: {
        name: data.name,
        address: data.address,
        phone: data.phone || null,
        rating: parseFloat(data.rating) || 0,
        reviews: parseInt(data.reviews) || 0,
        timings: data.timings,
        price: parseFloat(data.price) || 0,
      },
    });
    revalidatePath("/firms");
    revalidatePath("/admin/firms");
    return { success: true, firm };
  } catch (error) {
    console.error("Error creating firm:", error);
    return { success: false, error: "Failed to create firm" };
  }
}

export async function deleteFirm(id) {
  try {
    await db.lawFirm.delete({
      where: { id },
    });
    revalidatePath("/firms");
    revalidatePath("/admin/firms");
    return { success: true };
  } catch (error) {
    console.error("Error deleting firm:", error);
    return { success: false, error: "Failed to delete firm" };
  }
}

export async function getFirms() {
  try {
    const firms = await db.lawFirm.findMany({
      orderBy: { createdAt: "desc" },
    });
    return firms;
  } catch (error) {
    console.error("Error fetching firms:", error);
    return [];
  }
}
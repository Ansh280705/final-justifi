"use client";

import { useState } from "react";
import {
  Building2, Plus, Trash2, ToggleLeft, ToggleRight,
  Phone, MapPin, Clock, User, Stethoscope, Loader2,
  CheckCircle2, XCircle, ChevronDown, ChevronUp, Navigation
} from "lucide-react";
import { addOffice, deleteOffice, toggleOfficeStatus } from "@/actions/offices";
import { toast } from "sonner";

const PRACTICE_AREAS = [
  "Criminal Lawyer", "Civil Lawyer", "Family Lawyer", "Corporate Lawyer",
  "Real Estate Lawyer", "Immigration Lawyer", "Tax Lawyer", "Intellectual Property Lawyer",
  "Employment Lawyer", "Personal Injury Lawyer", "Bankruptcy Lawyer", "Environmental Lawyer",
  "Cyber Lawyer", "Consumer Protection", "Human Rights Lawyer", "Other",
];

const EMPTY_FORM = {
  name: "", lawyerName: "", practiceArea: "Criminal Lawyer",
  phone: "", email: "", address: "", city: "", state: "", pincode: "", timing: "",
};

export function OfficesManager({ offices: initialOffices }) {
  const [offices, setOffices] = useState(initialOffices);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);
  const [manualGeo, setManualGeo] = useState(null); // { lat, lng } from browser
  const [geoLocating, setGeoLocating] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Use browser geolocation for exact clinic coordinates
  const useMyLocation = () => {
    if (!("geolocation" in navigator)) return toast.error("Location not supported in this browser");
    setGeoLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setManualGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setGeoLocating(false);
        toast.success(`📍 Location captured: ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`);
      },
      () => {
        setGeoLocating(false);
        toast.error("Could not get location. Enable location in browser settings.");
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    // Core fields always required
    const alwaysRequired = ["name", "lawyerName", "practiceArea", "phone", "timing"];
    for (const field of alwaysRequired) {
      if (!form[field].trim()) return toast.error(`Please fill in: ${field}`);
    }

    // Address fields required only if no GPS coordinates captured
    if (!manualGeo) {
      const addressRequired = ["address", "city", "state", "pincode"];
      for (const field of addressRequired) {
        if (!form[field].trim()) return toast.error(`Please fill in: ${field} (or use "Use My Location" button above)`);
      }
    }

    setSaving(true);
    const res = await addOffice({ ...form, manualLat: manualGeo?.lat, manualLng: manualGeo?.lng });
    setSaving(true);

    if (res.success) {
      toast.success(
        res.geocoded
          ? "✅ Office added & location detected!"
          : "✅ Office added. Location could not be detected — distances won't show for this office."
      );
      setOffices((prev) => [res.office, ...prev]);
      setForm(EMPTY_FORM);
      setManualGeo(null);
      setShowForm(false);
    } else {
      toast.error(res.error || "Failed to add office");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this office? This cannot be undone.")) return;
    setDeletingId(id);
    const res = await deleteOffice(id);
    setDeletingId(null);
    if (res.success) {
      setOffices((prev) => prev.filter((o) => o.id !== id));
      toast.success("Office removed");
    } else {
      toast.error(res.error);
    }
  };

  const handleToggle = async (id, current) => {
    setTogglingId(id);
    const res = await toggleOfficeStatus(id, !current);
    setTogglingId(null);
    if (res.success) {
      setOffices((prev) => prev.map((o) => o.id === id ? { ...o, isActive: !current } : o));
      toast.success(!current ? "Office activated" : "Office deactivated");
    } else {
      toast.error(res.error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Building2 className="w-5 h-5 text-client" /> Offline Offices
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {offices.length} office{offices.length !== 1 ? "s" : ""} registered
          </p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-2 px-4 py-2 bg-client text-white rounded-xl text-sm font-semibold hover:bg-client/90 transition-all"
        >
          {showForm ? <><ChevronUp className="w-4 h-4" /> Hide Form</> : <><Plus className="w-4 h-4" /> Add Office</>}
        </button>
      </div>

       {/* Add Form */}
      {showForm && (
        <form onSubmit={handleAdd} className="bg-card border border-border rounded-2xl p-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
          <h3 className="font-bold text-base mb-2">Register New Office</h3>

          {/* Use My Location button */}
          <div className="flex items-center gap-3 p-3 bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl">
            <div className="flex-1">
              <p className="text-xs font-semibold text-teal-800 dark:text-teal-300">
                {manualGeo
                  ? `✅ Location captured: ${manualGeo.lat.toFixed(5)}, ${manualGeo.lng.toFixed(5)}`
                  : "📍 If you're at the office right now, capture exact coordinates instantly:"}
              </p>
            </div>
            <button
              type="button"
              onClick={useMyLocation}
              disabled={geoLocating}
              className="flex items-center gap-1.5 px-3 py-2 bg-teal-600 text-white text-xs font-bold rounded-lg hover:bg-teal-700 transition-all disabled:opacity-60 shrink-0"
            >
              {geoLocating
                ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Getting...</>
                : <><Navigation className="w-3.5 h-3.5" /> Use My Location</>}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Office Name *" name="name" value={form.name} onChange={handleChange} placeholder="e.g. City Legal Associates" />
            <Field label="Lawyer Name *" name="lawyerName" value={form.lawyerName} onChange={handleChange} placeholder="e.g. Adv. Ankit Chourasiya" />

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Practice Area *</label>
              <select name="practiceArea" value={form.practiceArea} onChange={handleChange} className="border border-border rounded-xl px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-client/50">
                {PRACTICE_AREAS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <Field label="Phone *" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
            <Field label="Email (optional)" name="email" type="email" value={form.email} onChange={handleChange} placeholder="clinic@example.com" />
            <Field label="Timing *" name="timing" value={form.timing} onChange={handleChange} placeholder="Mon–Sat, 9am–6pm" />
          </div>

          <Field
            label={manualGeo ? "Full Address (optional — GPS captured)" : "Full Address *"}
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Plot No. 17, Above New Globas Medical..."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label="City *" name="city" value={form.city} onChange={handleChange} placeholder="Indore" />
            <Field label="State *" name="state" value={form.state} onChange={handleChange} placeholder="Madhya Pradesh" />
            <Field label="Pincode *" name="pincode" value={form.pincode} onChange={handleChange} placeholder="452010" />
          </div>

          <p className="text-xs text-muted-foreground bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-2">
            📍 Lat/Long will be <strong>auto-detected</strong> from the address using OpenStreetMap — no manual entry needed.
          </p>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2.5 bg-client text-white rounded-xl font-semibold text-sm hover:bg-client/90 transition-all disabled:opacity-60"
            >
              {saving
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</>
                : <><Plus className="w-4 h-4" /> Add Office</>}
            </button>
            <button type="button" onClick={() => { setShowForm(false); setForm(EMPTY_FORM); }} className="px-4 py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-muted transition-all">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Offices Table */}
      {offices.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <Building2 className="w-12 h-12 mx-auto mb-3 opacity-20" />
          <p className="font-medium">No offices added yet</p>
          <p className="text-sm mt-1">Click "Add Office" to register the first one.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {offices.map((office) => (
            <div key={office.id} className={`bg-card border rounded-2xl p-4 transition-all ${office.isActive ? "border-border" : "border-border/40 opacity-60"}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-base truncate">{office.name}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${office.isActive ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"}`}>
                      {office.isActive ? "ACTIVE" : "INACTIVE"}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">{office.practiceArea}</span>
                  </div>

                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{office.lawyerName}</span>
                    <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" />{office.phone}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{office.city}, {office.state} – {office.pincode}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{office.timing}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 truncate">📍 {office.address}</p>
                  {office.latitude !== 0 && (
                    <p className="text-[10px] text-emerald-600 mt-0.5">
                      ✅ Location: {office.latitude.toFixed(4)}, {office.longitude.toFixed(4)}
                    </p>
                  )}
                  {office.latitude === 0 && (
                    <p className="text-[10px] text-orange-500 mt-0.5">⚠️ Location not detected — distance won't be shown to clients</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleToggle(office.id, office.isActive)}
                    disabled={togglingId === office.id}
                    className="p-2 rounded-xl hover:bg-muted transition-all"
                    title={office.isActive ? "Deactivate" : "Activate"}
                  >
                    {togglingId === office.id ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : office.isActive ? (
                      <ToggleRight className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <ToggleLeft className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(office.id)}
                    disabled={deletingId === office.id}
                    className="p-2 rounded-xl hover:bg-red-50 text-red-400 hover:text-red-600 transition-all"
                    title="Delete office"
                  >
                    {deletingId === office.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Reusable field
function Field({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder}
        className="border border-border rounded-xl px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-client/50 transition-all"
      />
    </div>
  );
}

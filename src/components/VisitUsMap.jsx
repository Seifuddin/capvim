"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Share2,
  Copy,
  Car,
  Bus,
  Bike,
  LocateFixed,
  PersonStanding, // ✅ safer replacement for Walk
} from "lucide-react";

/**
 * VisitUsMap
 * Props:
 *  - name: string      -> Location name
 *  - address: string   -> Full postal/physical address
 *  - phone: string     -> Phone number (optional)
 *  - lat: number       -> Latitude
 *  - lng: number       -> Longitude
 *  - placeId?: string  -> Optional Google Place ID (improves directions links + embed)
 *  - hours?: string[]  -> Optional array of strings for service/office hours lines
 */
export default function VisitUsMap({
  name = "Your Name",
  address = "Globe View Plaza, Nairobi Kenya",
  phone = "+254 728 240 949",
  lat = -1.1616,
  lng = 36.9631,
  placeId = "",
  hours = [
    "Monday - Friday: 8:30 AM - 06:00 PM",
          "Weekends: 9:30 AM - 04:00 PM",
          "Public Holidays: 9:30 AM - 04:00 PM",
  ],
}) {
  const [origin, setOrigin] = useState("");
  const [mode, setMode] = useState("driving"); // driving | transit | walking | bicycling
  const [copied, setCopied] = useState(false);
  const destParam = useMemo(() => `${lat},${lng}`, [lat, lng]);

  // Build Google Maps Directions URL
  const googleDirUrl = useMemo(() => {
    const params = new URLSearchParams({
      api: "1",
      destination: placeId ? undefined : destParam,
      destination_place_id: placeId || undefined,
      destination_name: name,
      travelmode: mode,
      origin: origin || undefined,
    });
    return `https://www.google.com/maps/dir/?${params.toString()}`;
  }, [origin, mode, name, destParam, placeId]);

  // Apple Maps URL
  const appleDirUrl = useMemo(() => {
    const params = new URLSearchParams({
      daddr: destParam,
      dirflg: modeFlagForApple(mode),
      q: name,
    });
    if (origin) params.set("saddr", origin);
    return `https://maps.apple.com/?${params.toString()}`;
  }, [origin, mode, name, destParam]);

  // Embed URL (Google)
  const embedUrl = useMemo(() => {
    if (placeId) {
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_EMBED_API_KEY&place_id=${encodeURIComponent(
        placeId
      )}`;
    }
    return `https://www.google.com/maps?q=${encodeURIComponent(
      destParam
    )}&z=15&output=embed`;
  }, [placeId, destParam]);

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 1500);
      return () => clearTimeout(t);
    }
  }, [copied]);

  function modeFlagForApple(m) {
    // Apple Maps dirflg: d=driving, w=walking, r=transit (no bicycling)
    switch (m) {
      case "walking":
        return "w";
      case "transit":
        return "r";
      default:
        return "d";
    }
  }

  async function handleUseMyLocation() {
    if (!("geolocation" in navigator)) {
      alert("Geolocation is not available on this device/browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setOrigin(`${latitude},${longitude}`);
      },
      (err) => {
        console.error(err);
        alert("Could not get your location. Please allow location access or enter your starting point manually.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  async function handleShare() {
    const shareText = `${name}\n${address}\n${googleDirUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: name, text: `${name} • Visit Us`, url: googleDirUrl });
      } catch (_) {}
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
    }
  }

  async function copyAddress() {
    await navigator.clipboard.writeText(`${name}\n${address}`);
    setCopied(true);
  }

  return (
    <section className="py-16 px-6 mdpx-6 bg-green-50">
      <div className="mx-auto max-w-7xl rounded border border-green-200 bg-white shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: Directions */}
          <div className="p-8 md:p-10 lg:p-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-blue-900">
                  Visit Us
                </h2>
                <p className="mt-2 text-slate-600">
                  Plan your route and come interact with us. We can’t wait to welcome you.
                </p>
              </div>

              {/* Address */}
              <div className="rounded border border-slate-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded bg-indigo-50 p-2">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-slate-500">Address</p>
                    <h3 className="font-semibold text-slate-900">{name}</h3>
                    <p className="text-slate-700">{address}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={copyAddress}
                        className="inline-flex items-center gap-2 rounded border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy"}
                      </button>
                      <a
                        href={googleDirUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                      >
                        Open in Google Maps <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={appleDirUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        Open in Apple Maps
                      </a>
                      <button
                        onClick={handleShare}
                        className="inline-flex items-center gap-2 rounded- border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        <Share2 className="h-4 w-4" /> Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              {phone ? (
                <div className="rounded border border-slate-200 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded bg-green-50 p-2">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <a href={`tel:${phone.replace(/\s+/g, "")}`} className="font-medium text-slate-800 hover:underline">
                      {phone}
                    </a>
                  </div>
                </div>
              ) : null}

              {/* Hours */}
              {hours?.length ? (
                <div className="rounded border border-slate-200 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded bg-amber-50 p-2 mt-0.5">
                      <Clock className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-slate-500">Working & Office Hours</p>
                      <ul className="mt-1 space-y-1">
                        {hours.map((line, i) => (
                          <li key={i} className="text-slate-700">{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Route planner */}
              <div className="rounded border border-slate-200 p-5">
                <p className="text-sm uppercase tracking-wide text-slate-500 mb-3">Get Directions</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter your starting point (e.g., Ruiru, Kiambu)"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full rounded border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <button
                    onClick={handleUseMyLocation}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded border border-slate-300 px-4 py-3 text-slate-700 hover:bg-slate-50"
                  >
                    <LocateFixed className="h-4 w-4" /> Use my location
                  </button>
                </div>

                {/* Travel modes */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <ModeButton icon={<Car className="h-4 w-4" />} label="Drive" active={mode === "driving"} onClick={() => setMode("driving")} />
                  <ModeButton icon={<Bus className="h-4 w-4" />} label="Transit" active={mode === "transit"} onClick={() => setMode("transit")} />
                  <ModeButton icon={<PersonStanding className="h-4 w-4" />} label="Walk" active={mode === "walking"} onClick={() => setMode("walking")} />
                  <ModeButton icon={<Bike className="h-4 w-4" />} label="Cycle" active={mode === "bicycling"} onClick={() => setMode("bicycling")} />
                </div>

                {/* Action buttons */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={googleDirUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    Open Directions (Google) <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={appleDirUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Open Directions (Apple)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Map */}
          <div className="h-[420px] lg:h-full min-h-[420px] bg-slate-100">
            <iframe
              title={`${name} on Google Maps`}
              src={embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ModeButton({ icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded px-3 py-2 text-sm border ${
        active
          ? "bg-indigo-600 border-indigo-600 text-white"
          : "border-slate-300 text-slate-800 hover:bg-slate-50"
      }`}
    >
      {icon} {label}
    </button>
  );
}

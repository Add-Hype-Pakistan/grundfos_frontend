"use client";

import { useEffect, useMemo, useState } from "react";
import { dealers, type Dealer } from "./dealers";

const filters = ["All", "Showroom"] as const;
type Filter = (typeof filters)[number];

type LatLng = { lat: number; lng: number };

// Great-circle distance in km between two coordinates.
function distanceKm(a: LatLng, b: LatLng): number {
  const R = 6371;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export default function FindDealer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Dealer>(dealers[0]);
  const [userLoc, setUserLoc] = useState<LatLng | null>(null);
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(15);

  const chooseDealer = (d: Dealer) => {
    setSelected(d);
    setZoom(15);
  };

  const requestLocation = () => {
    if (!("geolocation" in navigator)) {
      setLocError("Location isn't supported on this device.");
      return;
    }
    setLocating(true);
    setLocError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocating(false);
      },
      () => {
        setLocError("We couldn't access your location. Please allow it and try again.");
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Ask for the visitor's location once on mount to show nearby dealers.
  useEffect(() => {
    requestLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = dealers.filter((d) => {
      const matchesFilter = filter === "All" || d.type === filter;
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.address.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
    if (userLoc) {
      return [...filtered].sort(
        (a, b) =>
          distanceKm(userLoc, { lat: a.lat, lng: a.lng }) -
          distanceKm(userLoc, { lat: b.lat, lng: b.lng })
      );
    }
    return filtered;
  }, [query, filter, userLoc]);

  // When we get the user's location, select the nearest dealer.
  useEffect(() => {
    if (userLoc && results.length > 0) {
      setSelected(results[0]);
      setZoom(15);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLoc]);

  const mapSrc = `https://www.google.com/maps?q=${selected.lat},${selected.lng}&z=${zoom}&output=embed`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-6 lg:gap-8">
      {/* Left column — search + list */}
      <div className="flex flex-col gap-5">
        {/* Search */}
        <div className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your city, area, or postcode"
            className="flex-1 h-11 px-4 rounded-sm bg-[#F5F6F8] border border-gray-200 text-[#092844] text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#126AF3]"
          />
          <button
            type="button"
            className="h-11 px-6 rounded-sm bg-[#126AF3] text-white text-sm font-medium hover:bg-[#0d5acc] transition-colors cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Filters + use my location */}
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-5 h-9 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                filter === f
                  ? "bg-[#126AF3] text-white border border-[#126AF3]"
                  : "bg-white text-[#092844] border border-gray-300 hover:border-[#126AF3]"
              }`}
            >
              {f}
            </button>
          ))}
          <button
            type="button"
            onClick={requestLocation}
            disabled={locating}
            className="inline-flex items-center gap-2 px-4 h-9 rounded-sm text-sm font-medium text-[#126AF3] border border-[#126AF3] hover:bg-[#126AF3]/5 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-default"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm8.94 3A9.01 9.01 0 0013 3.06V1h-2v2.06A9.01 9.01 0 003.06 11H1v2h2.06A9.01 9.01 0 0011 20.94V23h2v-2.06A9.01 9.01 0 0020.94 13H23v-2h-2.06zM12 19a7 7 0 110-14 7 7 0 010 14z" />
            </svg>
            {locating ? "Locating…" : "Use my location"}
          </button>
        </div>

        {/* Status / result count */}
        {locError ? (
          <p className="text-red-500 text-xs">{locError}</p>
        ) : (
          <p className="text-[#092844]/60 text-xs">
            {results.length} {results.length === 1 ? "dealer" : "dealers"} found
            {userLoc ? ", nearest first" : ""}
          </p>
        )}

        {/* List */}
        <div className="flex flex-col gap-3 max-h-[520px] overflow-y-auto pr-1">
          {results.map((d) => {
            const active = d.name === selected.name;
            return (
              <button
                key={d.name}
                type="button"
                onClick={() => chooseDealer(d)}
                className={`text-left w-full rounded-sm bg-white p-4 border-2 transition-colors cursor-pointer ${
                  active
                    ? "border-[#126AF3]"
                    : "border-gray-200 hover:border-[#126AF3]/40"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-[#092844] text-sm leading-snug">
                    {d.name}
                  </h3>
                  {userLoc && (
                    <span className="shrink-0 text-[#126AF3] text-[11px] font-semibold whitespace-nowrap">
                      {distanceKm(userLoc, { lat: d.lat, lng: d.lng }).toFixed(1)}{" "}
                      km
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[#4a5b6b] text-xs leading-snug">
                  {d.address}
                </p>
                <span className="mt-3 inline-block text-[#126AF3] text-[11px] font-medium border border-[#126AF3] rounded px-2 py-0.5">
                  Official {d.type}
                </span>
              </button>
            );
          })}
          {results.length === 0 && (
            <p className="text-[#092844]/60 text-sm py-8 text-center">
              No dealers match your search.
            </p>
          )}
        </div>
      </div>

      {/* Right column — map + selected details */}
      <div className="relative w-full min-h-[420px] lg:min-h-[600px] rounded-sm overflow-hidden bg-gray-200">
        <iframe
          title={`Map showing ${selected.name}`}
          src={mapSrc}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        {/* Zoom controls */}
        <div className="absolute bottom-4 right-4 flex flex-col rounded-sm overflow-hidden shadow-lg">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(z + 1, 21))}
            aria-label="Zoom in"
            className="w-10 h-10 flex items-center justify-center bg-white text-[#092844] text-xl leading-none hover:bg-gray-100 transition-colors cursor-pointer border-b border-gray-200"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(z - 1, 3))}
            aria-label="Zoom out"
            className="w-10 h-10 flex items-center justify-center bg-white text-[#092844] text-xl leading-none hover:bg-gray-100 transition-colors cursor-pointer"
          >
            −
          </button>
        </div>

        {/* Info card */}
        <div className="absolute top-4 left-4 right-4 md:right-auto md:w-[360px] bg-white rounded-sm shadow-lg p-5">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-bold text-[#092844] text-lg leading-snug">
              {selected.name}
            </h2>
            <a
              href={selected.location}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in Google Maps"
              className="shrink-0 text-[#126AF3] hover:opacity-70 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
          <p className="mt-2 text-[#4a5b6b] text-sm leading-snug">
            {selected.address}
          </p>
          <a
            href={selected.location}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-[#126AF3] text-sm font-medium hover:opacity-70 transition-opacity no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            Get directions
          </a>
        </div>
      </div>
    </div>
  );
}

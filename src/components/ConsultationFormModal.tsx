"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

// Deployed Google Apps Script Web App URL (appends submissions to the sheet).
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzQ8l_ypjsPyM-xDxI0bybeZgPw2audovFGhCH98bICYrzgyC71qoiE5aeHtoht5034/exec";

type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationFormModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset status whenever the modal is reopened
  useEffect(() => {
    if (open) setStatus("idle");
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!ENDPOINT) {
      console.error("Consultation endpoint not configured (NEXT_PUBLIC_CONSULTATION_ENDPOINT).");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(payload),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-sm border border-gray-300 px-3 py-2.5 text-sm text-[#171717] outline-none focus:border-[#126AF3] focus:ring-1 focus:ring-[#126AF3]";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 md:p-8 shadow-xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <h3 className="font-(family-name:--font-grundfos-sans-extd) font-bold text-[#11497B] text-xl md:text-2xl leading-tight mb-1">
          Book a Home Consultation
        </h3>
        <p className="text-sm text-gray-500 mb-5">
          Share your details and we&rsquo;ll get back to you to confirm a time.
        </p>

        {status === "success" ? (
          <div className="py-8 text-center">
            <p className="text-[#11497B] font-bold text-lg mb-1">Thank you!</p>
            <p className="text-sm text-gray-600">
              Your consultation request has been submitted.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center justify-center px-6 h-11 bg-[#126AF3] text-white text-sm rounded-sm hover:bg-[#0d5acc] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-[#171717] mb-1">Name</label>
              <input name="name" type="text" required className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#171717] mb-1">Phone number</label>
              <input name="number" type="tel" required className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#171717] mb-1">Email</label>
              <input name="email" type="email" required className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#171717] mb-1">Home address</label>
              <textarea name="address" required rows={2} className={inputClass} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#171717] mb-1">Date</label>
                <input name="date" type="date" required className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#171717] mb-1">Time</label>
                <input name="time" type="time" required className={inputClass} />
              </div>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 inline-flex items-center justify-center px-6 h-11.75 bg-[#126AF3] text-white text-base font-normal leading-none rounded-sm hover:bg-[#0d5acc] transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting…" : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

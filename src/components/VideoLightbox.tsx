"use client";

import { useEffect } from "react";

type VideoLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
};

// Returns a YouTube embed URL if `src` is a YouTube watch/short/embed link, else null.
function getYouTubeEmbedUrl(src: string): string | null {
  const match = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  if (!match) return null;
  return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
}

export default function VideoLightbox({ open, onClose, src }: VideoLightboxProps) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const youTubeEmbed = getYouTubeEmbedUrl(src);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-5xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 md:-right-2 text-white hover:opacity-80 transition-opacity"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {youTubeEmbed ? (
          <div className="relative w-full aspect-video">
            <iframe
              src={youTubeEmbed}
              title="SCALA2 in Action"
              className="absolute inset-0 w-full h-full rounded-lg bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <video
            src={src}
            className="w-full h-auto max-h-[80vh] rounded-lg bg-black"
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
}

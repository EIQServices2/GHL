"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/elements/Button";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

/**
 * Reusable modal dialog. Backdrop click + Escape + X button close it.
 * Matches GHL popup (white body, centered, rounded).
 */
export function Modal({ open, onClose, title, children }: ModalProps) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[720px] overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 text-pri-ink-muted hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </Button>
        {title && (
          <h2 className="mb-4 pr-8 text-xl font-bold text-pri-ink">{title}</h2>
        )}
        {children}
      </div>
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps {
  className?: string;
  size?: "wide" | "narrow" | "form";
  children: React.ReactNode;
}

// Shared content container — single source of truth for horizontal alignment.
export function Container({
  className,
  size = "wide",
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        size === "narrow" && "max-w-3xl px-6",
        size === "form" && "max-w-2xl px-4",
        size === "wide" && "max-w-[1440px] px-4",
        className
      )}
    >
      {children}
    </div>
  );
}

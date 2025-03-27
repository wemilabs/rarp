"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  text?: string;
  variant?: "default" | "ghost";
  className?: string;
}

export function BackButton({ text, variant, className }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant={variant}
      onClick={() => router.back()}
      className={cn("cursor-pointer", className)}
    >
      <ArrowLeft className="size-4" />
      {text}
    </Button>
  );
}

import type { Metadata } from "next";

import Image from "next/image";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "404 Not Found | AcadHub",
  description:
    "The page you're looking for – either being in construction or been moved.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Image
        src={
          "https://ubrw5iu3hw.ufs.sh/f/TFsxjrtdWsEIod6U0RDsH9TukZ83NVJ7WeBRxYhXIzpmr2tl"
        }
        alt="404 Not Found"
        width={400}
        height={400}
        className="my-8 rounded-md"
      />
      <h1 className="text-4xl font-bold mb-4">Oops!😬</h1>
      <p className="mb-8">
        <code className="bg-muted font-medium px-2 rounded-full">v0.2.0</code>:
        The page you're looking for – either in construction or has been moved.
      </p>

      <BackButton variant="default" text="Previous" />
    </div>
  );
}

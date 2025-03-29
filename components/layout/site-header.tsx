import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              💫arport.
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-3">
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="ghost" size="sm" className="text-sm" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

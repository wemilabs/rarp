"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
}

export function SearchBar({
  placeholder = "Search for papers, authors, topics...",
  defaultValue = "",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-3xl items-center space-x-2"
    >
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-12 rounded-full border-1 px-4 shadow-sm focus-visible:ring-primary focus-visible:ring-0 focus-visible:ring-offset-0"
        autoFocus
      />
      <Button type="submit" size="icon" className="size-11 rounded-full">
        <Search className="size-4" />
      </Button>
    </form>
  );
}

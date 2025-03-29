"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "lucide-react";

interface SearchFiltersProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  years: [number, number];
  categories: string[];
  citationsMin: number;
}

const currentYear = new Date().getFullYear();
const DEFAULT_FILTERS: FilterState = {
  years: [currentYear - 5, currentYear],
  categories: [],
  citationsMin: 0,
};

const CATEGORIES = [
  "Computer Science",
  "Physics",
  "Mathematics",
  "Biology",
  "Medicine",
  "Economics",
  "Psychology",
];

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const updateFilters = (partialFilters: Partial<FilterState>) => {
    const newFilters = { ...filters, ...partialFilters };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <div className="w-full space-y-6 rounded-lg border p-4">
      <div>
        <h3 className="font-medium mb-3">Publication Year</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{filters.years[0]}</span>
            <span>{filters.years[1]}</span>
          </div>
          <Slider
            defaultValue={filters.years}
            min={1900}
            max={currentYear}
            step={1}
            onValueChange={(value) => updateFilters({ years: value as [number, number] })}
          />
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category}`} 
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => {
                  const newCategories = checked
                    ? [...filters.categories, category]
                    : filters.categories.filter((c) => c !== category);
                  updateFilters({ categories: newCategories });
                }}
              />
              <Label htmlFor={`category-${category}`}>{category}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Citations</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Min: {filters.citationsMin}</span>
          </div>
          <Slider
            defaultValue={[filters.citationsMin]}
            max={1000}
            step={10}
            onValueChange={(value) => updateFilters({ citationsMin: value[0] })}
          />
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full" 
        onClick={() => setFilters(DEFAULT_FILTERS)}
      >
        Reset Filters
      </Button>
    </div>
  );
}

"use client";

import { useState } from "react";
import { PaperCard, PaperProps } from "@/components/search/paper-card";
import { SearchFilters } from "@/components/search/search-filters";

interface FilterState {
  years: [number, number];
  categories: string[];
  citationsMin: number;
}

interface ClientFilteredResultsProps {
  papers: PaperProps[];
}

export function ClientFilteredResults({ papers }: ClientFilteredResultsProps) {
  const [filteredPapers, setFilteredPapers] = useState<PaperProps[]>(papers);

  const handleFilterChange = (filters: FilterState) => {
    console.log("Filters changed:", filters);

    // Apply filters to papers
    const filtered = papers.filter((paper) => {
      // Filter by year
      const paperYear = paper.publishedAt?.getFullYear();
      if (
        paperYear &&
        (paperYear < filters.years[0] || paperYear > filters.years[1])
      ) {
        return false;
      }

      // Filter by citations
      if (paper.citations && paper.citations < filters.citationsMin) {
        return false;
      }

      // Filter by categories (if any selected)
      if (filters.categories.length > 0) {
        const paperCategories = paper.categories.map((c) => c.name);
        const hasMatchingCategory = filters.categories.some((category) =>
          paperCategories.includes(category)
        );
        if (!hasMatchingCategory) {
          return false;
        }
      }

      return true;
    });

    setFilteredPapers(filtered);
  };

  return (
    <>
      <aside className="col-span-1 lg:col-span-1">
        <div className="sticky top-24">
          <SearchFilters onFilterChange={handleFilterChange} />
        </div>
      </aside>

      <div className="col-span-1 lg:col-span-3">
        <div className="grid grid-cols-1 gap-6">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => (
              <PaperCard key={paper.id} {...paper} />
            ))
          ) : (
            <div className="text-center py-12 bg-background/50 rounded-lg border border-border/50">
              <h3 className="text-lg font-medium">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import { SearchBar } from "@/components/search/search-bar";
import { ClientFilteredResults } from "@/components/search/client-filtered-results";
import { MOCK_PAPERS } from "@/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const resolvedParams = await searchParams;
  const queryParam = resolvedParams?.q || "";
  const query = Array.isArray(queryParam) ? queryParam[0] || "" : queryParam;
  const papers = MOCK_PAPERS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center mb-8">
        <SearchBar
          placeholder="Search for papers, authors, topics..."
          defaultValue={query}
        />
      </div>

      {query && (
        <div className="text-muted-foreground text-sm mb-6 ml-1">
          Showing results for &quot;{query}&quot;
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <ClientFilteredResults papers={papers} />
      </div>
    </div>
  );
}

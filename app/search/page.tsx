import { PaperProps } from "@/components/search/paper-card";
import { SearchBar } from "@/components/search/search-bar";
import { ClientFilteredResults } from "@/components/search/client-filtered-results";

// This would typically come from a database or API
const MOCK_PAPERS: PaperProps[] = [
  {
    id: "1",
    title:
      "Machine Learning Approaches for Natural Language Processing: A Survey",
    authors: [
      { name: "Jane Smith" },
      { name: "John Doe" },
      { name: "Robert Johnson" },
    ],
    abstract:
      "This paper presents a comprehensive survey of machine learning approaches for natural language processing (NLP). We cover traditional statistical methods, neural networks, and the recent advances in transformer-based models such as BERT, GPT, and T5. The paper discusses the strengths and limitations of each approach and provides insights into future research directions.",
    publishedAt: new Date("2023-05-15"),
    citations: 143,
    categories: [{ name: "Computer Science" }, { name: "Machine Learning" }],
    url: "#",
    pdfUrl: "#",
  },
  {
    id: "2",
    title: "Climate Change Impact on Global Biodiversity: A Meta-Analysis",
    authors: [
      { name: "Maria Garcia" },
      { name: "David Chen" },
      { name: "Sarah Johnson" },
      { name: "Michael Brown" },
    ],
    abstract:
      "This meta-analysis examines the impact of climate change on global biodiversity across terrestrial, freshwater, and marine ecosystems. Drawing from over 500 studies conducted between 2000 and 2023, we quantify species range shifts, phenological changes, and population declines attributed to climate warming. Our findings indicate significant cross-ecosystem effects with varying intensities based on geographical region and taxonomic group.",
    publishedAt: new Date("2022-11-03"),
    citations: 287,
    categories: [{ name: "Biology" }, { name: "Environmental Science" }],
    url: "#",
    pdfUrl: "#",
  },
  {
    id: "3",
    title: "Quantum Computing Algorithms for Optimization Problems",
    authors: [{ name: "Alan Zhang" }, { name: "Lisa Kumar" }],
    abstract:
      "We present novel quantum algorithms for solving complex optimization problems that demonstrate quantum advantage over classical methods. Using a hybrid quantum-classical approach, our methods leverage quantum superposition and entanglement to explore large solution spaces efficiently. Experimental results on benchmark optimization problems show speedups consistent with theoretical predictions when tested on current NISQ (Noisy Intermediate-Scale Quantum) devices.",
    publishedAt: new Date("2023-02-21"),
    citations: 89,
    categories: [{ name: "Physics" }, { name: "Computer Science" }],
    url: "#",
    pdfUrl: "#",
  },
  {
    id: "4",
    title: "Neural Mechanisms of Working Memory in Prefrontal Cortex",
    authors: [
      { name: "James Wilson" },
      { name: "Elena Rodriguez" },
      { name: "Thomas Anderson" },
    ],
    abstract:
      "This study investigates the neural circuits and computational mechanisms underlying working memory in the prefrontal cortex. Using a combination of electrophysiological recordings and optogenetic manipulations in animal models, we identify specific neuronal populations that maintain persistent activity during working memory tasks. Our findings provide insights into how the brain maintains and manipulates information in the absence of sensory stimuli.",
    publishedAt: new Date("2023-08-05"),
    citations: 61,
    categories: [{ name: "Neuroscience" }, { name: "Psychology" }],
    url: "#",
    pdfUrl: "#",
  },
];

type SearchParams = { [key: string]: string | string[] | undefined };

interface SearchPageProps {
  params: Record<string, never>;
  searchParams: SearchParams;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await Promise.resolve(searchParams);

  let query = "";

  if (params) {
    const qParam = params.q;
    if (Array.isArray(qParam)) {
      query = qParam[0] || "";
    } else {
      query = qParam || "";
    }
  }

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

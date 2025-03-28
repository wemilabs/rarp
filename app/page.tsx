import { SearchBar } from "@/components/search/search-bar";
import { Icons } from "@/components/ui/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: Icons;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all bg-background/50 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-2">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Hero section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center space-y-8 px-4 py-16">
        <div className="max-w-4xl w-full text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Rwanda Academic{" "}
            <span className="text-primary">Research Portal</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover, explore, and access academic papers from top journals and
            databases.
          </p>
          <div className="flex justify-center pt-6 relative">
            <SearchBar />
          </div>
          <div className="pt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Popular:</span>
            <div className="flex gap-2">
              {["Machine Learning", "Climate Change", "Quantum Physics"].map(
                (topic) => (
                  <Link
                    key={topic}
                    href={`/search?q=${encodeURIComponent(topic)}`}
                    className="px-3 py-1 bg-muted/50 hover:bg-muted rounded-full text-sm transition-colors"
                  >
                    {topic}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Use Our Portal
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Icons.search}
              title="Advanced Search"
              description="Powerful search capabilities with filters for year, author, citation count, and more."
            />
            <FeatureCard
              icon={Icons.bookText}
              title="Comprehensive Database"
              description="Access millions of papers from reputable journals and academic databases."
            />
            <FeatureCard
              icon={Icons.trendingUp}
              title="Citation Metrics"
              description="View citation counts and impact factors to evaluate research importance."
            />
            <FeatureCard
              icon={Icons.fileText}
              title="Full-Text Access"
              description="Direct links to full-text PDFs when available through institutional access."
            />
            <FeatureCard
              icon={Icons.compass}
              title="Research Explorer"
              description="Discover related papers and explore research topics with interactive tools."
            />
            <FeatureCard
              icon={Icons.bookOpen}
              title="Save & Organize"
              description="Create collections and save papers for future reference and organization."
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Ready to explore academic research?
          </h2>
          <p className="text-xl text-muted-foreground">
            Start your academic journey with our powerful research tools.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/search">Start Searching</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

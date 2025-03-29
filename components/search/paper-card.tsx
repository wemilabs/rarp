import { CalendarIcon, Download, ExternalLink, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface PaperProps {
  id: string;
  title: string;
  authors: { name: string }[];
  abstract: string;
  publishedAt: Date | null;
  citations: number;
  categories: { name: string }[];
  url?: string;
  pdfUrl?: string;
}

export function PaperCard({
  title,
  authors,
  abstract,
  publishedAt,
  citations,
  categories,
  url,
  pdfUrl,
}: PaperProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold leading-tight hover:text-primary transition-colors">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2">
                {title}
                <ExternalLink className="h-4 w-4 flex-shrink-0 mt-1" />
              </a>
            ) : (
              title
            )}
          </CardTitle>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <Users className="h-4 w-4" />
          <span>
            {authors.slice(0, 3).map((author, i) => (
              <span key={author.name + i}>
                {author.name}
                {i < Math.min(authors.length, 3) - 1 && ", "}
              </span>
            ))}
            {authors.length > 3 && " et al."}
          </span>
        </div>
        {publishedAt && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <span>{publishedAt.toLocaleDateString()}</span>
            <span className="ml-2 flex items-center gap-1">
              <span className="font-medium">{citations}</span> citations
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-3">{abstract}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category.name} variant="secondary">
              {category.name}
            </Badge>
          ))}
        </div>
        {pdfUrl && (
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            PDF
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

import {
  ArrowRight,
  Bell,
  Trash2,
  BookOpen,
  BookText,
  Compass,
  FileText,
  Search,
  TrendingUp,
  User,
  Send,
  Loader2,
  Bookmark,
  SendHorizontal,
  Quote as QuoteOpen,
  type LucideIcon,
} from "lucide-react";

export type Icons = LucideIcon;

export const Icons = {
  arrowRight: ArrowRight,
  bell: Bell,
  trash2: Trash2,
  user: User,
  send: Send,
  sendHorizontal: SendHorizontal,
  loader: Loader2,
  bookOpen: BookOpen,
  bookText: BookText,
  compass: Compass,
  fileText: FileText,
  search: Search,
  trendingUp: TrendingUp,
  bookmark: Bookmark,
  quoteOpen: QuoteOpen,
} as const;

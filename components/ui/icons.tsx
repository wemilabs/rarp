// components/ui/icons.tsx
import * as React from "react";
import type { SVGProps } from "react";
import {
  ArrowRight,
  Bell,
  Trash2,
  User,
  Send,
  Loader2,
  BookOpen,
  Bookmark,
  SendHorizontal,
  Quote as QuoteOpen,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  arrowRight: ArrowRight,
  bell: Bell,
  trash2: Trash2,
  user: User,
  send: Send,
  sendHorizontal: SendHorizontal,
  loader: Loader2,
  bookOpen: BookOpen,
  bookmark: Bookmark,
  quoteOpen: QuoteOpen,
} as const;

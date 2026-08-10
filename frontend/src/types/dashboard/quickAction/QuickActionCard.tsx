import type { LucideIcon } from "lucide-react";
import type { QuickActionButton } from "./QuickActionButton";

export type QuickActionCard = {
  bg: string;
  badge: string;
  badgeBg: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  actions: QuickActionButton[];
};
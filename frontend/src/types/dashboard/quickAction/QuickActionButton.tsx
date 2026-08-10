import type { LucideIcon } from "lucide-react";

export type QuickActionButton = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  disabled?: boolean;
  variant?: "light" | "transparent";
  textColor?: string;
};
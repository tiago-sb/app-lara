export interface PublicationCardProps {
  id: number;
  category: string;
  title: string;
  authors: string;
  date: string;
  summary: string;
  url?: string | null;
}

export const ACCENT = {
  bg: "rgba(253,186,4,0.12)",
  color: "#fd7e14",
};
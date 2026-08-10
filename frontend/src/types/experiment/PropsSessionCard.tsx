type Status = "available" | "active" | "scheduled";

export interface PropsSessionCard {
  status: Status;
  card: {
    bg: string;
    badge: string;
    badgeBg: string;
    title: string;
    desc: string;
    canSchedule: boolean;
  };
  onStart: () => void;
  onSchedule: () => void;
}
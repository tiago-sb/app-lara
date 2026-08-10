type PropsUtilsReservation = {
  start_datetime: string;
  description?: string;
};

export type GetQuickActionCardsParams = {
  status: "available" | "scheduled" | "active";
  nextReservation?: PropsUtilsReservation | null;
  activeReservation?: PropsUtilsReservation | null;
  onJoinSession: () => void;
  onStartSession: () => void;
  onScheduleSession: () => void;
  onStartTraining: () => void;
};
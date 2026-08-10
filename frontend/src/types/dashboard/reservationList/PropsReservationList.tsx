import type { Reservation } from "../../experiment/Reservation";

export type PropsReservationList = {
  reservations: Reservation[] | undefined;
  onDelete: (id: number) => void;
};
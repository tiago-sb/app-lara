import { useMemo } from "react";
import type { Reservation } from "../types/experiment/Reservation";
import type { ReservationStatus } from "../types/dashboard/reservationList/ReservationStatus";
import { status } from "../data/reservation";

export const getStatus = (r: Reservation): ReservationStatus => {
  if (new Date(r.start_datetime) > new Date()) return "scheduled";
  return "finished";
};

export const useReservationList = (reservations: Reservation[] | undefined) => {
  // ordena a lista de reservas, dá mais recente para mais antiga
  const sorted = useMemo(() =>
    [...(reservations ?? [])].sort(
      (a, b) => {
        const dateA = new Date(a.start_datetime).getTime();
        const dateB = new Date(b.start_datetime).getTime();

        // compara o timestamp para ordenar da mais nova para a mais velha
        return dateB - dateA;
      }
    ), [reservations]);

  const withStatus = useMemo(
    () => sorted.map((r) => ({ ...r, status: getStatus(r), config: status[getStatus(r)] })),
    [sorted]
  );

  // lista de reservas ordenada, com o número de reservas
  return { reservations: withStatus, total: withStatus.length };
};
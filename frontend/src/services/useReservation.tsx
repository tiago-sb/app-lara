import { useEffect, useState, useCallback } from "react";
import type { Reservation } from "../types/experiment/Reservation";

export function formatDate(date: Date): string {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
}

export function useReservation() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setLoading(false);
      return;
    }

    fetch("/sistema-api/reservation/", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error(`Erro ${res.status} ao buscar reservas.`);
        return res.json();
      })
      .then(data => {
        const list = Array.isArray(data) ? data : data.results ?? [];
        setReservations(list);
      })
      .catch(err => {
        console.error(err);
        setError("Não foi possível carregar as reservas.");
      })
      .finally(() => setLoading(false));
  }, []);

  const now = new Date();

  const activeReservation = reservations.find(r => {
    const start = new Date(r.start_datetime);
    const end = new Date(r.end_datetime);
    return now >= start && now <= end && !r.finished;
  });

  const nextReservation = reservations
    .filter(r => new Date(r.start_datetime) > now && !r.finished)
    .sort(
      (a, b) =>
        new Date(a.start_datetime).getTime() - new Date(b.start_datetime).getTime()
    )[0];

  const status: "available" | "active" | "scheduled" =
    activeReservation ? "active" :
    nextReservation   ? "scheduled" :
    "available";

  const createReservation = useCallback(async (payload: object) => {
    const token = localStorage.getItem("access_token");
    const res = await fetch("/sistema-api/reservation/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    
    if (!res.ok) throw new Error("Erro ao criar reserva.");

    const created: Reservation = await res.json();
    setReservations(prev => [...prev, created]);
    return created;
  }, []);

  const getUserReservations = useCallback((userId: number) => {
    return reservations.filter(
      reservation => reservation.user === userId
    );
  }, [reservations]);

  const deleteReservation = useCallback(async (id: number) => {
    const token = localStorage.getItem("access_token");
    
    const res = await fetch(`/sistema-api/reservation/${id}/`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error("Erro ao deletar reserva.");

    setReservations(prev => prev.filter(r => r.id !== id));
  }, []);  

  return { 
    reservations, 
    loading, 
    error, 
    activeReservation, 
    nextReservation, 
    status, 
    createReservation, 
    getUserReservations,
    deleteReservation 
  };
}
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../services/useUser";
import { useReservation, formatDate } from "../services/useReservation";
import { HeaderDashboard } from "../components/dashboard/HeaderDashboard";
import { QuickActions } from "../components/dashboard/QuickActions";
import { SessionModal } from "../components/dashboard/SessionModal";
import { getQuickActionCards } from "../data/cards";
import { ReservationList } from "../components/dashboard/ReservationList";
import { FooterDashboard } from "../components/dashboard/FooterDashboard";
import { EnterSessionModal } from "../components/dashboard/EnterSessionModal";
import { usePadId } from "../hooks/usePadId";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [sessionModalOpen, setSessionModalOpen] = useState(false);
  const [sessionForm, setSessionForm] = useState({start_datetime: "", end_datetime: "", description: "",});
  const [enterModalOpen, setEnterModalOpen] = useState(false)
  const { user } = useUser();
  const { padId } = usePadId();
  const { status, nextReservation, activeReservation, createReservation, deleteReservation, reservations } = useReservation();
  
  const EXPERIMENT_ID = 1;
  const AUTH_KEYS = ["access_token", "refresh_token", "user_id", "username"] as const;
  const userId = Number(localStorage.getItem("user_id"));
  
  const userReservations = useMemo(
    () => reservations.filter(r => r.user === userId), [reservations]
  );
  
  const onDelete = (id: number) => {
    deleteReservation(id).catch(() => alert("Erro ao excluir reserva. Tente novamente."));
  };

  const handleLogout = () => {
    AUTH_KEYS.forEach(k => localStorage.removeItem(k));
    navigate("/");
  };

  const openSessionModal = (action: "start" | "schedule") => {
    if (action === "start") {
      if (activeReservation) {
        alert("Não é possível iniciar a sessão. O experimento está sendo utilizado no momento.");
        return;
      }

      const now = new Date();
      const end = new Date(now.getTime() + 30 * 60 * 1000);

      createReservation({
        start_datetime: formatDate(now),
        end_datetime: formatDate(end),
        description: "",
        showed_up: true,
        finished: false,
        user: user?.id,
        experiment: EXPERIMENT_ID,
      })
        .then((created) => {
          localStorage.setItem("active_reservation_id", String(created.id));
          localStorage.setItem("active_pad_id", padId);
          navigate("/experiment");
        })
        .catch(() => alert("Erro ao criar a sessão. Tente novamente."));

      return;
    }

    setSessionModalOpen(true);
  };

  const openEnterModal = () => {
    setEnterModalOpen(true);
  };

   const handleEnterSession = (code: string) => {
    localStorage.setItem("active_pad_id", code);
    setEnterModalOpen(false);
    navigate("/experiment");
  };

  const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
    const { name, value } = e.target;
    setSessionForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSessionDatetimeChange = (value: string) => {
    setSessionForm((prev) => ({ ...prev, start_datetime: value }));
  };

  const handleSessionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const start = new Date(sessionForm.start_datetime);
      const end = new Date(start.getTime() + 30 * 60 * 1000);

      await createReservation({
        start_datetime: formatDate(start),
        end_datetime: formatDate(end),
        description: sessionForm.description,
        showed_up: false,
        finished: false,
        user: user?.id,
        experiment: EXPERIMENT_ID,
      });

      setSessionModalOpen(false);
    } catch (err) {
      console.error(err);
      alert("Erro ao agendar a sessão. Tente novamente.");
    }
  };

  const openTrainingMode = () => { navigate("/training"); };

  const quickActionCards = getQuickActionCards({
    status,
    nextReservation,
    activeReservation,
    onJoinSession: () => openEnterModal(),
    onStartSession: () => openSessionModal("start"),
    onScheduleSession: () => openSessionModal("schedule"),
    onStartTraining: openTrainingMode,
  });

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f4faf6" }}>
      <HeaderDashboard user={user} onLogout={handleLogout} />

      <main className="container py-5">
        <div className="mb-5">
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2rem)",
              color: "#1a1a2e",
            }}
          >
            Olá, {user?.name || user?.username || "..."} 👋
          </h1>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.95rem",
              color: "#6c757d",
            }}
          >
            Bem-vindo ao seu painel de controle. O que você gostaria de fazer hoje?
          </p>
        </div>

        <QuickActions cards={quickActionCards} />
        <ReservationList reservations={userReservations} onDelete={onDelete} /> 
      </main>
      <FooterDashboard />
      
      {sessionModalOpen && (
        <SessionModal
          action="schedule"
          form={sessionForm}
          onChange={handleSessionChange}
          onDatetimeChange={handleSessionDatetimeChange}
          onSubmit={handleSessionSubmit}
          onClose={() => setSessionModalOpen(false)}
        />
      )}

      {enterModalOpen && (
        <EnterSessionModal
          onClose={() => setEnterModalOpen(false)}
          onEnter={handleEnterSession}
        />
      )}
    </div>
  );
};
import { Play, Clock, AlertCircle, Plus, Calendar } from "lucide-react";
import type { PropsSessionCard } from "../../types/experiment/PropsSessionCard";

const STATUS_ICON = {
  available: Play,
  scheduled: Clock,
  active: AlertCircle,
};

export const SessionCard = ({ status, card, onStart, onSchedule }: PropsSessionCard) => {
  const Icon = STATUS_ICON[status];

  return (
    <div
      className="rounded-4 p-4 text-white h-100"
      style={{
        background: card.bg,
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: card.bg,
          transition: "opacity 0.4s ease",
          zIndex: -1,
        }}
      />

      <div className="d-flex align-items-center justify-content-between mb-3">
        <Icon size={32} />
        <span
          className="badge px-3 py-2"
          style={{
            backgroundColor: card.badgeBg,
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.75rem",
          }}
        >
          {card.badge}
        </span>
      </div>

      <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.2rem" }}>
        {card.title}
      </h3>

      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", opacity: 0.9, marginBottom: "1rem" }}>
        {card.desc}
      </p>

      <div className="d-grid gap-2">
        <button
          type="button"
          className="btn w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={onStart}
          disabled={status === "active"}
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            borderRadius: 8,
            opacity: status === "active" ? 0.5 : 1,
            transition: "opacity 0.2s",
          }}
        >
          <Plus size={16} />
          Iniciar Sessão
        </button>

        <button
          type="button"
          className="btn w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={onSchedule}
          disabled={!card.canSchedule}
          style={{
            backgroundColor: card.canSchedule ? "#fff" : "rgba(255,255,255,0.1)",
            color: card.canSchedule ? "#198754" : "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.3)",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            borderRadius: 8,
            cursor: card.canSchedule ? "pointer" : "not-allowed",
            transition: "background-color 0.2s, color 0.2s"
          }}
        >
          <Calendar size={16} />
          Agendar Sessão
        </button>
      </div>
    </div>
  );
};
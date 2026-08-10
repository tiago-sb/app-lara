import { Trash2 } from "lucide-react";
import { useReservationList } from "../../hooks/useReservationList";
import type { PropsReservationList } from "../../types/dashboard/reservationList/PropsReservationList";
import { formateDateReservationList, formateTimeReservationList } from "../../utils/formateUtils";

export const ReservationList = ({ reservations, onDelete }: PropsReservationList) => {
  const { reservations: sorted } = useReservationList(reservations);
  
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between align-items-baseline mb-3">
        <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1a1a2e" }}>
          Suas Reservas
        </h2>
        <span style={{ fontSize: "0.8rem", color: "#6c757d" }}>
          {sorted.length} {sorted.length !== 1 ? " reservas" : " reserva"}
        </span>
      </div>

      {sorted.length === 0 ? (
        <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>Nenhuma reserva encontrada.</p>
      ) : (
        <div style={{ maxHeight: "360px", overflowY: "auto" }} className="d-flex flex-column gap-2">
          {sorted.map((r) => {

            return (
              <div key={r.id}
                className="d-flex align-items-center gap-3 p-3 rounded-3 bg-white"
                style={{ border: "0.5px solid #dee2e6" }}
              >
                <div className="flex-grow-1 overflow-hidden">
                  <p className="mb-0" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a1a2e" }}>
                    {formateDateReservationList(r.start_datetime)}
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.75rem", color: "#6c757d" }}>
                    {formateTimeReservationList(r.start_datetime)} - {formateTimeReservationList(r.end_datetime)}
                  </p>
                  {r.description && (
                    <p className="mb-0 text-truncate" style={{ fontSize: "0.75rem", color: "#6c757d" }}>
                      {r.description}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => onDelete(r.id)}
                  className="btn btn-sm"
                  style={{ color: "#dc3545", padding: "4px 8px", lineHeight: 1 }}
                  title="Excluir reserva"
                >
                  <Trash2 size={16} />
                </button> 

                <div
                  className="d-flex align-items-center gap-1 rounded-pill px-2 py-1"
                  style={{ fontFamily: "Montserrat, sans-serif", background: r.config.bg, fontSize: "0.7rem", fontWeight: 600, color: r.config.color, whiteSpace: "nowrap" }}
                >
                  <i style={{ fontSize: "0.75rem" }} />
                  {r.config.label}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
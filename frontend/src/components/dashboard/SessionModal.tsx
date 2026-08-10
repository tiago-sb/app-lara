import { useState } from "react";
import { X } from "lucide-react";
import type { PropsSessionModal } from "../../types/experiment/PropsSessionModal";
import { DatetimePicker } from "./DatetimePicker";
import { formatEndDatetime, toDatetimeLocal } from "../../utils/SessionModalUtils";

const font = { fontFamily: "Montserrat, sans-serif" };

export const SessionModal = ({ action, form, onChange, onDatetimeChange, onSubmit, onClose }: PropsSessionModal) => {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const handlePartChange = (field: "date" | "hour" | "minute", value: string) => {
    const nextDate = field === "date" ? value : date;
    const nextHour = field === "hour" ? value : hour;
    const nextMinute = field === "minute" ? value : minute;

    setDate(nextDate);
    setHour(nextHour);
    setMinute(nextMinute);

    if (nextDate && nextHour && nextMinute) onDatetimeChange(toDatetimeLocal(nextDate, nextHour, nextMinute));
  };

  const selectedDatetime = date && hour && minute ? toDatetimeLocal(date, hour, minute) : "";
  const endDatetime = selectedDatetime ? formatEndDatetime(selectedDatetime) : "—";

  return (
    <div
      className="modal d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <form
          className="modal-content border-0 rounded-4 shadow"
          onSubmit={onSubmit}
        >
          <div className="modal-header d-flex align-items-center justify-content-between">
            <h5 className="modal-title mb-0" style={{ ...font, fontWeight: 700 }}>
              {action === "start" ? "Iniciar Sessão" : "Agendar Sessão"}
            </h5>

            <button
              type="button"
              className="btn btn-light border rounded-circle p-2 ms-auto"
              onClick={onClose}
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
          </div>

          <div className="modal-body">
            <div className="row g-3">
              <DatetimePicker
                date={date}
                hour={hour}
                minute={minute}
                onPartChange={handlePartChange}
              />

              <div className="col-12">
                <div
                  className="d-flex align-items-center gap-2 p-3 rounded-3"
                  style={{
                    backgroundColor: "rgba(25,135,84,0.06)",
                    border: "1px solid rgba(25,135,84,0.15)",
                  }}
                >
                  <div style={{ ...font, fontSize: "0.85rem", color: "#6c757d" }}>
                    Término previsto:
                  </div>

                  <div
                    style={{
                      ...font,
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#198754",
                    }}
                  >
                    {endDatetime}
                  </div>

                  <span
                    className="badge ms-auto"
                    style={{
                      backgroundColor: "rgba(25,135,84,0.1)",
                      color: "#198754",
                      ...font,
                      fontSize: "0.75rem",
                    }}
                  >
                    30 min
                  </span>
                </div>
              </div>

              <div className="col-12">
                <label
                  className="form-label"
                  style={{ ...font, fontSize: "0.85rem", fontWeight: 500 }}
                >
                  Descrição
                </label>

                <textarea
                  name="description"
                  className="form-control"
                  rows={3}
                  value={form.description}
                  onChange={onChange}
                  placeholder="Descreva a sessão"
                  style={{ ...font, fontSize: "0.9rem" }}
                />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light border"
              onClick={onClose}
              style={{ ...font, fontSize: "0.9rem" }}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="btn btn-success"
              disabled={!selectedDatetime}
              style={{ ...font, fontWeight: 600, fontSize: "0.9rem" }}
            >
              {action === "start" ? "Iniciar" : "Agendar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
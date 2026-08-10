import { useState } from "react";
import { X } from "lucide-react";

interface EnterSessionModalProps {
  onClose: () => void;
  onEnter: (code: string) => void;
}

const font = { fontFamily: "Montserrat, sans-serif" };

export const EnterSessionModal = ({ onClose, onEnter }: EnterSessionModalProps) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    onEnter(code.trim());
  };

  return (
    <div
      className="modal d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <form
          className="modal-content border-0 rounded-4 shadow"
          onSubmit={handleSubmit}
        >
          {/* Header */}
          <div className="modal-header d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <h5 className="modal-title mb-0" style={{ ...font, fontWeight: 700 }}>
                Entrar em Sessão
              </h5>
            </div>
            <button
              type="button"
              className="btn btn-light border rounded-circle p-2 ms-auto"
              onClick={onClose}
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-12">
                <p style={{ ...font, fontSize: "0.875rem", color: "#6c757d", marginBottom: 4 }}>
                  Insira o código da sessão para entrar no experimento.
                </p>
              </div>

              <div className="col-12">
                <label
                  htmlFor="session-code"
                  className="form-label"
                  style={{ ...font, fontSize: "0.85rem", fontWeight: 500 }}
                >
                  Código da sessão
                </label>
                <input
                  id="session-code"
                  type="text"
                  autoFocus
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Ex: LARA-XYZ-321-YLA"
                  className="form-control"
                  style={{ ...font, fontSize: "0.9rem" }}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
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
              className="btn"
              disabled={!code.trim()}
              style={{
                ...font,
                fontWeight: 600,
                fontSize: "0.9rem",
                background: code.trim()
                  ? "linear-gradient(135deg, #fd7e14 0%, #FBBB04 100%)"
                  : "#dee2e6",
                color: code.trim() ? "#fff" : "#adb5bd",
                border: "none",
              }}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
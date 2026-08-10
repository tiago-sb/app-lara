import { Play, Send } from "lucide-react";
import { Button, Card } from "react-bootstrap";
import { EtherpadEditor } from "../../etherpad/EtherpadEditor";
import { useCode } from "../../../hooks/useCode";

type DevelopmentPanelProps = {
  experimentoId: string;
  showSubmitButton?: boolean;
  editorHeight?: number | string;
  userName?: string; 
};

export const DevelopmentPanel = ({ experimentoId, showSubmitButton = true, editorHeight, userName }: DevelopmentPanelProps) => {
  const padId = `${experimentoId}-codigo`;
  const { output, loading, compileFromPad, compileAndSend } = useCode();
  async function handleCompile() {
    await compileFromPad(padId);
  }

  async function handleSend() {
    await compileAndSend(padId, "192.168.0.111");
  }
  return (
    <>
      <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-border">
          <span style={{ color: "#2B2B2B", fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem" }}>
            Editor de Código
          </span>

          <div className="d-flex align-items-center gap-2">
            <Button
              variant="outline-secondary"
              size="sm"
              disabled={loading}
              onClick={handleCompile}
              className="d-flex align-items-center gap-2"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.8rem",
                color: "#2B2B2B",
                borderColor: "#d1d5db",
              }}
            >
              <Play size={13} fill="#2B2B2B" />
              Compilar
            </Button>

            {showSubmitButton && (
              <Button
                size="sm"
                disabled={loading}
                onClick={handleSend}
                className="d-flex align-items-center gap-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.8rem",
                  backgroundColor: "#198754",
                  borderColor: "#198754",
                  color: "#fff",
                }}
              >
                <Send size={13} />
                Submeter
              </Button>
            )}
          </div>
        </div>

        <div className="flex-grow-1 p-3">
          <div
            className="h-100 rounded-3 border overflow-hidden"
            style={{ backgroundColor: "#0d1117", borderColor: "#1f2937" }}
          >
            <div
              className="px-3 py-2 border-bottom d-flex align-items-center justify-content-between"
              style={{ backgroundColor: "#161b22", borderColor: "#1f2937" }}
            >
              <span className="small" style={{ color: "#9ca3af", fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem" }}>
                main.cpp
              </span>
            </div>

            <EtherpadEditor padId={padId} height={editorHeight} userName={userName} />
          </div>
        </div>
      </div>

      <Card className="border-0 border-top rounded-0" style={{ borderColor: "#1f2937" }}>
        <Card.Header
          className="px-3 py-2 d-flex align-items-center justify-content-between"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <span style={{ fontSize: "0.8rem", color: "#2B2B2B" }}>Console</span>
        </Card.Header>

        <Card.Body className="p-3 overflow-auto" style={{ minHeight: 150 }}>
          <pre
            className="mb-0"
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#2B2B2B" }}
          >
            {output || "// Output..."}
          </pre>
        </Card.Body>
      </Card>
    </>
  );
};

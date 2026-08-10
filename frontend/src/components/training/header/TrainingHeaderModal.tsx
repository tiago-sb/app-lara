import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import type { SettingsConfig, SettingsModalProps } from "./types";
import { useExperimentSettings } from "../../../hooks/useExperimentSettings";

export const TrainingHeaderModal = ({ show, handleClose, onSave }: SettingsModalProps) => {
  const { settings } = useExperimentSettings();
  const [fontSize, setFontSize]               = useState(settings.fontSize);
  const [useMonospaceFont, setMonospace]      = useState(settings.useMonospaceFont);
  const [showLineNumbers, setLineNumbers]     = useState(settings.showLineNumbers);
  const [readOnly, setReadOnly]               = useState(settings.readOnly);

  useEffect(() => {
    if (show) {
      setFontSize(settings.fontSize);
      setMonospace(settings.useMonospaceFont);
      setLineNumbers(settings.showLineNumbers);
      setReadOnly(settings.readOnly);
    }
  }, [show]);

  const handleSubmit = () => {
    const config: SettingsConfig = { fontSize, useMonospaceFont, showLineNumbers, readOnly };
    onSave?.(config);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>
          Configurações de Interface
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex flex-column gap-4">

        {/* Tamanho da fonte */}
        <Form.Group>
          <Form.Label style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
            Tamanho do texto: <strong>{fontSize}px</strong>
          </Form.Label>
          <Form.Range
            min={12}
            max={22}
            value={fontSize}
            onChange={e => setFontSize(Number(e.target.value))}
          />
          <div className="d-flex justify-content-between" style={{ fontSize: "0.75rem", color: "#6c757d" }}>
            <span>12px</span>
            <span>22px</span>
          </div>
        </Form.Group>

        {/* Fonte monoespaçada */}
        <Form.Group>
          <Form.Check
            type="switch"
            id="monospace-switch"
            label="Fonte monoespaçada"
            checked={useMonospaceFont}
            onChange={e => setMonospace(e.target.checked)}
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem" }}
          />
          <Form.Text className="text-muted" style={{ fontSize: "0.78rem" }}>
            Recomendado para leitura de código
          </Form.Text>
        </Form.Group>

        {/* Números de linha */}
        <Form.Group>
          <Form.Check
            type="switch"
            id="linenumbers-switch"
            label="Exibir números de linha"
            checked={showLineNumbers}
            onChange={e => setLineNumbers(e.target.checked)}
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem" }}
          />
        </Form.Group>

        {/* Somente leitura */}
        <Form.Group>
          <Form.Check
            type="switch"
            id="readonly-switch"
            label="Modo somente leitura"
            checked={readOnly}
            onChange={e => setReadOnly(e.target.checked)}
            style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem" }}
          />
          <Form.Text className="text-muted" style={{ fontSize: "0.78rem" }}>
            Impede edições no editor durante a sessão
          </Form.Text>
        </Form.Group>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem" }}>
          Cancelar
        </Button>
        <Button variant="success" onClick={handleSubmit}
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>
          Aplicar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
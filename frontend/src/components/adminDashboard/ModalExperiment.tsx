import { useState } from "react";
import { useAdminExperiments } from "../../hooks/useAdminExperiments";
import { X } from "lucide-react";
import type { ListModalExperimentsProps } from "../../types/dashboardAdmin/ListModalExperimentsProps";
import { ExperimentTemplate } from "../../types/dashboardAdmin/ExperimentTemplate";

export const ModalExperiment = ({ showModal, setSuccess }: ListModalExperimentsProps) => {
  const { createExperiment } = useAdminExperiments();
  const [saving, setSaving] = useState(false); 
  const [expForm, setExpForm] = useState(ExperimentTemplate);

  const handleExpChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setExpForm(prev => ({ ...prev, [name]: name === "schedule_time" ? Number(value) : value }));
  };

  const handleCreateExperiment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const ok = await createExperiment(expForm);
    setSaving(false);
    if (ok) {
      showModal(false);
      setExpForm(ExperimentTemplate);
      setSuccess("Experimento criado com sucesso!");
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const font = "Montserrat, sans-serif";
  return (
    <div className="modal d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.45)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <form className="modal-content border-0 rounded-4 shadow" onSubmit={handleCreateExperiment}>
          <div className="modal-header d-flex align-items-center justify-content-between">
            <h5 className="modal-title mb-0" style={{ fontFamily: font, fontWeight: 700 }}>
              Novo Experimento
            </h5>
            <button type="button" className="btn btn-light border rounded-circle p-2 ms-auto" onClick={() => showModal(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="modal-body">
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label" style={{ fontFamily: font, fontSize: "0.85rem", fontWeight: 500 }}>Nome</label>
                <input type="text" name="name" className="form-control" value={expForm.name} onChange={handleExpChange} required style={{ fontFamily: font, fontSize: "0.9rem" }} />
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label" style={{ fontFamily: font, fontSize: "0.85rem", fontWeight: 500 }}>Tipo</label>
                <select name="type" className="form-select" value={expForm.type} onChange={handleExpChange} style={{ fontFamily: font, fontSize: "0.9rem" }}>
                  <option value="Physical">Physical</option>
                  <option value="Virtual">Virtual</option>
                </select>
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label" style={{ fontFamily: font, fontSize: "0.85rem", fontWeight: 500 }}>Tempo (min)</label>
                <input type="number" name="schedule_time" className="form-control" value={expForm.schedule_time} onChange={handleExpChange} min={1} required style={{ fontFamily: font, fontSize: "0.9rem" }} />
              </div>

              <div className="col-12">
                <label className="form-label" style={{ fontFamily: font, fontSize: "0.85rem", fontWeight: 500 }}>Descrição</label>
                <textarea name="description" className="form-control" rows={3} value={expForm.description} onChange={handleExpChange} style={{ fontFamily: font, fontSize: "0.9rem", resize: "none" }} />
              </div>

              <div className="col-12">
                <label className="form-label" style={{ fontFamily: font, fontSize: "0.85rem", fontWeight: 500 }}>Localização</label>
                <input type="text" name="location" className="form-control" value={expForm.location} onChange={handleExpChange} style={{ fontFamily: font, fontSize: "0.9rem" }} />
              </div>

              <div className="col-12">
                <label className="form-label" style={{ fontFamily: font, fontSize: "0.85rem", fontWeight: 500 }}>Instituição</label>
                <input type="text" name="institution" className="form-control" value={expForm.institution} onChange={handleExpChange} style={{ fontFamily: font, fontSize: "0.9rem" }} />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-light border" onClick={() => showModal(false)} style={{ fontFamily: font, fontSize: "0.9rem" }}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-success" disabled={saving} style={{ fontFamily: font, fontWeight: 600, fontSize: "0.9rem" }}>
              {saving ? <span className="spinner-border spinner-border-sm me-2" /> : null}
              {saving ? "Criando..." : "Criar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
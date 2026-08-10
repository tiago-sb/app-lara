import { Plus } from "lucide-react"
import type { ListExperimentsProps } from "../../../types/dashboardAdmin/ListExperimentsProps";

export const Init = ({ showModal }: ListExperimentsProps) => {
  const font = "Montserrat, sans-serif";

  return (
    <div className="px-4 py-3 border-bottom d-flex align-items-center justify-content-between">
      <span style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem", color: "#1a1a2e" }}>
        Experimentos
      </span>
      <button
        className="btn btn-success btn-sm d-flex align-items-center gap-2"
        onClick={() => showModal(true)}
        style={{ fontFamily: font, fontSize: "0.85rem", fontWeight: 600, borderRadius: 8 }}
      >
        <Plus size={15} /> Novo Experimento
      </button>
    </div>
  )
}
import { FlaskConical } from "lucide-react";
import { useAdminExperiments } from "../../../hooks/useAdminExperiments";

export const ListExperimentsDescription = () => {
  const { experiments } = useAdminExperiments();
  const font = "Montserrat, sans-serif";
  
  return (
    <div className="d-flex flex-column gap-0">
      {experiments.map((exp, i) => (
        <div
          key={exp.id}
          className="d-flex align-items-start gap-3 px-4 py-3"
          style={{ borderBottom: i < experiments.length - 1 ? "1px solid #f0f0f0" : "none" }}
        >
          <div
            className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
            style={{ width: 44, height: 44, backgroundColor: "rgba(25,135,84,0.1)" }}
          >
            <FlaskConical size={20} color="#198754" />
          </div>
          <div className="flex-grow-1">
            <div style={{ fontFamily: font, fontWeight: 700, fontSize: "0.95rem", color: "#2B2B2B" }}>
              {exp.name}
            </div>
            <div style={{ fontFamily: font, fontSize: "0.85rem", color: "#6c757d", marginTop: 2 }}>
              {exp.description}
            </div>
            <div className="d-flex flex-wrap gap-2 mt-2">
              <span className="badge" style={{ backgroundColor: "rgba(25,135,84,0.1)", color: "#198754", fontSize: "0.75rem" }}>
                {exp.type}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
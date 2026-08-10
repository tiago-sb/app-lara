import type { PropsStatsDashboard } from "../../../types/dashboardAdmin/PropsStatsDashboard";

export const Stats = ({users, actives, experiments}: PropsStatsDashboard) => {
  const font = "Montserrat, sans-serif";
  
  return (
    <div className="row g-4 mb-5 justify-content-between">
      <div className="col-6 col-md-3">
        <div className="card border-0 rounded-4 p-4 shadow-sm text-center">
          <div style={{ fontFamily: font, fontWeight: 800, fontSize: "2rem", color: "#198754" }}>
            {users}
          </div>
          <div style={{ fontFamily: font, fontSize: "0.8rem", color: "#6c757d" }}>Usuários</div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card border-0 rounded-4 p-4 shadow-sm text-center">
          <div style={{ fontFamily: font, fontWeight: 800, fontSize: "2rem", color: "#198754" }}>
            {actives}
          </div>
          <div style={{ fontFamily: font, fontSize: "0.8rem", color: "#6c757d" }}>Staff</div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card border-0 rounded-4 p-4 shadow-sm text-center">
          <div style={{ fontFamily: font, fontWeight: 800, fontSize: "2rem", color: "#198754" }}>
            {experiments}
          </div>
          <div style={{ fontFamily: font, fontSize: "0.8rem", color: "#6c757d" }}>Experimentos</div>
        </div>
      </div>
    </div>
  )
}
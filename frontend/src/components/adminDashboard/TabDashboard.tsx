import { tabsDashboardAdmin } from "../../data/tabsDashboardAdmin";
import type { TabDashboardProps } from "../../types/dashboardAdmin/TabDashboardProps";

export const TabDashboard = ({ tab, setTab }: TabDashboardProps) => {
  const font = "Montserrat, sans-serif";
  
  return (
    <div className="d-flex gap-2 mb-4">
      {tabsDashboardAdmin.map(({ key, label, icon }) => (
        <button
          key={key}
          className="btn d-flex align-items-center gap-2"
          onClick={() => setTab(key)}
          style={{
            fontFamily: font, fontSize: "0.9rem", fontWeight: 600,
            backgroundColor: tab === key ? "#198754" : "transparent",
            color: tab === key ? "#fff" : "#6c757d",
            border: tab === key ? "none" : "1px solid #dee2e6",
            borderRadius: 8
          }}
        >
          {icon} {label}
        </button>
      ))}
    </div>
  );
};
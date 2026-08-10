import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import logoLara from "../../../public/logo_lara.png";
import type { PropsHeaderDashboard } from "../../types/dashboard/PropsHeaderDashboard";

export const HeaderDashboard = ({ user, onLogout }: PropsHeaderDashboard) => {
  
  const link = () => user?.is_staff ? "/admin/dashboard" : "/dashboard"

  return (
    <header
      className="bg-white border-bottom position-sticky top-0"
      style={{ zIndex: 1050, boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between" style={{ height: 70 }}>
          <Link to={link()}>
            <img src={logoLara} alt="LARA Logo" style={{ height: 48, width: "auto" }} />
          </Link>

          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-2">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: 38, height: 38, backgroundColor: "rgba(25,135,84,0.1)" }}
              >
                <Link to="/profile-edit">
                  <User size={18} color="#198754" />
                </Link>
              </div>
              <div className="d-none d-md-block">
                <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#2B2B2B" }}>
                  {user?.name || user?.username || "..."}
                </div>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "#6c757d" }}>
                  {user?.is_staff ? "staff" : "aluno"}
                </div>
              </div>
            </div>

            <button
              className="btn btn-light border rounded-circle p-2"
              onClick={onLogout}
              title="Sair"
            >
              <LogOut size={18} color="#2B2B2B" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
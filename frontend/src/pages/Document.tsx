import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../components/dashboard/HeaderDashboard";
import { FooterDashboard } from "../components/dashboard/FooterDashboard";
import { useUser } from "../services/useUser";
import { componentsList } from "../data/components";
import { GridComponents } from "../components/document/GridComponents";
import { Init } from "../components/document/Init";
import { GridRobot } from "../components/document/GridRobot";
import { GridCircuit } from "../components/document/GridCircuit";
import { BackProfile } from "../components/profileEdit/BackProfile";

export const Document = () => {
  const AUTH_KEYS = ["access_token", "refresh_token", "user_id", "username"] as const;
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    AUTH_KEYS.forEach(k => localStorage.removeItem(k));
    navigate("/");
  };

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: "#f4faf6" }}>
      <HeaderDashboard user={user} onLogout={handleLogout} />
      <main className="container py-5 flex-grow-1">
        <BackProfile user={user} />
        
        <Init />
        <div className="mb-5">
          <GridComponents componentsList={componentsList} />
        </div>
        
        <div className="mb-5">
          <GridRobot />
        </div>

        <div className="mb-5">
          <GridCircuit />
        </div>

      </main>
      <FooterDashboard />
    </div>
  );
};
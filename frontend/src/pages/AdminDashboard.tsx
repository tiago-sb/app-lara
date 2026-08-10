import { useState } from "react";
import { TitleDashboardAdmin } from "../components/adminDashboard/title/TitleDashboardAdmin";
import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../components/dashboard/HeaderDashboard";
import { FooterDashboard } from "../components/dashboard/FooterDashboard";
import { useUser } from "../services/useUser";
import { SucessAlert } from "../components/adminDashboard/SucessAlert";
import { ListUsers } from "../components/adminDashboard/listUsers/ListUsers";
import { ListExperiments } from "../components/adminDashboard/listExperiments/ListExperiments";
import { ModalExperiment } from "../components/adminDashboard/ModalExperiment";
import { TabDashboard } from "../components/adminDashboard/TabDashboard";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [tab, setTab] = useState<"users" | "experiments">("users");
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState("");
  const AUTH_KEYS = ["access_token", "refresh_token", "user_id", "username"] as const;
  
  const handleLogout = () => {
    AUTH_KEYS.forEach(k => localStorage.removeItem(k));
    navigate("/");
  };

  return (
    <>
      <HeaderDashboard user={user} onLogout={handleLogout} />
      <div className="min-vh-100" style={{ backgroundColor: "#f4faf6" }}>
        <div className="container py-5">
          {/* título inicial */}
          <TitleDashboardAdmin />
          
          {/* Alerta sucesso */}
          {success && <SucessAlert success={success} />}

          {/* Tabs */}
          <TabDashboard tab={tab} setTab={setTab} />
          
          {/* ── Usuários ── */}
          {tab === "users" && <ListUsers />}
          {/* ── Experimentos ── */}
          {tab === "experiments" && <ListExperiments showModal={setShowModal} />}
        </div>
      </div>

      {/* ── Modal Novo Experimento ── */}
      {showModal && <ModalExperiment showModal={setShowModal} setSuccess={setSuccess} />}

      <FooterDashboard />
    </>
  );
};
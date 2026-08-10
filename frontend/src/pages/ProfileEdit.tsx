// src/pages/ProfileEdit.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../components/dashboard/HeaderDashboard";
import { BackProfile } from "../components/profileEdit/BackProfile";
import { useUser } from "../services/useUser";
import { FormProfile } from "../components/profileEdit/form/FormProfile";
import { ProfileLoading } from "../components/profileEdit/ProfileLoading";
import { ErrorProfile } from "../components/profileEdit/ErrorProfile";
import { SucessProfile } from "../components/profileEdit/SucessProfile";
import { InitForm } from "../components/profileEdit/InitForm";

export const ProfileEdit = () => {
  const navigate = useNavigate();
  const { user, loading, saving, updateUser } = useUser();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const AUTH_KEYS = ["access_token", "refresh_token", "user_id", "username"] as const;

  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    location: "",
    birth_date: "",
    is_active: true,
    is_staff: false,
  });

  useEffect(() => {
    if (user) {
      setForm({
        username: user.username ?? "",
        name: user.name ?? "",
        email: user.email ?? "",
        location: user.location ?? "",
        birth_date: user.birth_date ?? "",
        is_active: user.is_active ?? true,
        is_staff: user.is_staff ?? false,
      });
    }
  }, [user]);

  const handleLogout = () => {
    AUTH_KEYS.forEach(k => localStorage.removeItem(k));
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const ok = await updateUser(form);
    if (ok) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError("Erro ao salvar as alterações. Tente novamente.");
    }
  };

  return (
    <>
      <HeaderDashboard user={user} onLogout={handleLogout} />

      <div className="min-vh-100" style={{ backgroundColor: "#f4faf6", paddingTop: 24, paddingBottom: 48 }}>
        <div className="container" style={{ maxWidth: 600 }}>
          {/* Voltar */}
          <BackProfile user={user} />

          <div className="card border-0 rounded-4 shadow-sm p-4 p-md-5">
            {/* Avatar */}
            <InitForm />
            
            {/* Alertas */}
            { success && <SucessProfile /> }
            { error && <ErrorProfile error={error} /> }
            { loading 
              ? <ProfileLoading /> 
              : <FormProfile form={form} onChange={handleChange} onSubmit={handleSubmit} saving={saving} />
            }
          </div>
        </div>
      </div>
    </>
  );
};
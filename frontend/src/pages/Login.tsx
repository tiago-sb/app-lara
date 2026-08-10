import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import logoLara from "../../public/logo_lara.png";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { loginAndGetUser } from "../services/authService";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const { user } = await loginAndGetUser(username, password);
      navigate(user.is_staff ? "/admin/dashboard" : "/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login.");
    } finally {
      setLoading(false);
    } 
  };

  return (
    <MainLayout>
      <div className="min-vh-100 d-flex flex-column">
        <div className="flex-grow-1 d-flex align-items-center justify-content-center"
          style={{ paddingTop: "120px", paddingBottom: "3rem" }}
        >
          <div className="w-100" style={{ maxWidth: 460 }}>
            <div className="card border shadow-sm rounded-4 p-4 p-md-5">
              {/* Logo */}
              <div className="text-center mb-4">
                <img src={logoLara} alt="LARA Logo" style={{ height: 56, width: "auto" }} className="mb-3" />
                <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#2B2B2B" }}>
                  Bem-vindo de volta!
                </h2>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", color: "#6c757d" }}>
                  Entre na sua conta para continuar
                </p>
              </div>

              {/* Erro */}
              {error && (
                <div className="alert alert-danger py-2 mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem" }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Usuário */}
                <div className="mb-3">
                  <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>
                    Usuário
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <Mail size={16} color="#6c757d" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0"
                      placeholder="seu usuário"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      required
                      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                    />
                  </div>
                </div>

                {/* Senha */}
                <div className="mb-2">
                  <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>
                    Senha
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <Lock size={16} color="#6c757d" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control border-start-0 border-end-0 ps-0"
                      placeholder="········"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                    />
                    <button
                      type="button"
                      className="input-group-text bg-white border-start-0"
                      onClick={() => setShowPassword(v => !v)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <EyeOff size={16} color="#6c757d" /> : <Eye size={16} color="#6c757d" />}
                    </button>
                  </div>
                </div>

                {/* Esqueceu senha */}
                {/* <div className="text-end mb-4">
                  <Link
                    to="/forgot-password"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#198754", textDecoration: "none" }}
                  >
                    Esqueceu sua senha?
                  </Link>
                </div> */}

                <div className="text-end mt-4">
                  <button
                    type="submit"
                    className="btn btn-success w-100 py-2"
                    disabled={loading}
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", fontWeight: 600, borderRadius: 8 }}
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm me-2" role="status" />
                    ) : null}
                    {loading ? "Entrando..." : "Entrar"}
                  </button>
                </div>
              </form>

              <p className="text-center mt-4 mb-0" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#6c757d" }}>
                Não tem uma conta?{" "}
                <Link to="/register" style={{ color: "#198754", fontWeight: 600, textDecoration: "none" }}>
                  Criar conta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
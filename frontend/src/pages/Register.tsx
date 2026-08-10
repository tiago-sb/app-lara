import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User, MapPin, AtSign, Calendar } from "lucide-react";
import logoLara from "../../public/logo_lara.png";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { login, register } from "../services/authService";

export const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    username: "",
    nome: "",
    email: "",
    location: "",
    birth_date: "",
    senha: "",
    confirmarSenha: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (form.senha !== form.confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      await register(
        form.username,
        form.email,
        form.senha,  
        form.nome,
        form.location,
        form.birth_date
      );
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar conta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="d-flex flex-column" style={{ paddingTop: "140px", paddingBottom: "60px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <div className="w-100" style={{ maxWidth: 520 }}>
            <div className="card border shadow-sm rounded-4 p-4 p-md-5">
              {/* Logo */}
              <div className="text-center mb-4">
                <img src={logoLara} alt="LARA Logo" style={{ height: 56, width: "auto" }} className="mb-3" />
                <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#2B2B2B" }}>
                  Criar Conta
                </h2>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", color: "#6c757d" }}>
                  Junte-se ao LARA e comece a aprender programação
                </p>
              </div>

              {error && (
                <div className="alert alert-danger py-2" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem" }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Username e Nome — lado a lado */}
                <div className="row mb-3">
                  <div className="col-6">
                    <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>
                      Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <AtSign size={16} color="#6c757d" />
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0 ps-0"
                        placeholder="seu_usuario"
                        value={form.username}
                        onChange={e => setForm({ ...form, username: e.target.value })}
                        required
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>
                      Nome completo
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <User size={16} color="#6c757d" />
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0 ps-0"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={e => setForm({ ...form, nome: e.target.value })}
                        required
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                      />
                    </div>
                  </div>
                </div>

                {/* E-mail */}
                <div className="mb-3">
                  <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>
                    E-mail
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <Mail size={16} color="#6c757d" />
                    </span>
                    <input
                      type="email"
                      className="form-control border-start-0 ps-0"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                    />
                  </div>
                </div>

                {/* Localização e Data de nascimento — lado a lado */}
                <div className="row mb-3">
                  <div className="col-6">
                    <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>
                      Localização
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <MapPin size={16} color="#6c757d" />
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0 ps-0"
                        placeholder="Cidade, Estado"
                        value={form.location}
                        onChange={e => setForm({ ...form, location: e.target.value })}
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>
                      Data de nascimento
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <Calendar size={16} color="#6c757d" />
                      </span>
                      <input
                        type="date"
                        className="form-control border-start-0 ps-0"
                        value={form.birth_date}
                        onChange={e => setForm({ ...form, birth_date: e.target.value })}
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Senha e Confirmar */}
                <div className="row mb-3">
                  <div className="col-6">
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
                        value={form.senha}
                        onChange={e => setForm({ ...form, senha: e.target.value })}
                        required
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                      />
                      <button type="button" className="input-group-text bg-white border-start-0" onClick={() => setShowPassword(v => !v)}>
                        {showPassword ? <EyeOff size={16} color="#6c757d" /> : <Eye size={16} color="#6c757d" />}
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>
                      Confirmar senha
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <Lock size={16} color="#6c757d" />
                      </span>
                      <input
                        type={showConfirm ? "text" : "password"}
                        className="form-control border-start-0 border-end-0 ps-0"
                        placeholder="········"
                        value={form.confirmarSenha}
                        onChange={e => setForm({ ...form, confirmarSenha: e.target.value })}
                        required
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
                      />
                      <button type="button" className="input-group-text bg-white border-start-0" onClick={() => setShowConfirm(v => !v)}>
                        {showConfirm ? <EyeOff size={16} color="#6c757d" /> : <Eye size={16} color="#6c757d" />}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 py-2"
                  disabled={loading}
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", fontWeight: 600, borderRadius: 8 }}
                >
                  {loading && <span className="spinner-border spinner-border-sm me-2" role="status" />}
                  {loading ? "Criando conta..." : "Criar Conta"}
                </button>
              </form>

              <p className="text-center mt-4 mb-0" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#6c757d" }}>
                Já tem uma conta?{" "}
                <Link to="/login" style={{ color: "#198754", fontWeight: 600, textDecoration: "none" }}>
                  Entrar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
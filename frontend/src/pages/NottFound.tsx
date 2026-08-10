import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "../components/mainLayout/MainLayout";
import image from "../../public/nott_found.png";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#f4faf6", fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="d-flex flex-column flex-md-row align-items-center gap-5">
          {/* Texto */}
          <div className="text-center text-md-start">
            <h1 style={{ fontSize: "6rem", fontWeight: 800, color: "#198754", lineHeight: 1 }}>
              404
            </h1>
            <h2 style={{ fontWeight: 700, color: "#2B2B2B", marginBottom: 8 }}>
              Página não encontrada
            </h2>
            <p style={{ color: "#6c757d", marginBottom: 32 }}>
              O endereço que você digitou não existe
            </p>
            <Link
              to="/"
            >
              <button
                className="btn btn-success px-4 py-2"
                style={{ fontWeight: 600, borderRadius: 8 }}
                onClick={() => navigate("/")}
              >
                Voltar para o início
              </button>
            </Link>
          </div>

          {/* Imagem */}
          <img
            src={image}
            alt="Página não encontrada"
            style={{ width: "100%", maxWidth: 320 }}
          />
        </div>
      </div>
    </MainLayout>
  );
};
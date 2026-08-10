import type { Laboratory } from "../../types/laboratory/TypeLaboratory";
import { Button } from "react-bootstrap";

export const CardLaboratory = ({ laboratory }: { laboratory: Laboratory }) => (
  <div
    className="card h-100 border rounded-4 shadow-sm overflow-hidden"
    style={{ transition: "box-shadow 0.2s, transform 0.2s" }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 28px #000000";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "";
    }}
  >
    {/* Imagem */}
    <div style={{ height: 192, overflow: "hidden", position: "relative" }}>
      <img
        src={laboratory.image}
        alt={laboratory.title}
        className="w-100 h-100"
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
        }}
      />
    </div>

    {/* Conteúdo */}
    <div className="card-body d-flex flex-column gap-2 p-4">
      <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a1a2e", lineHeight: 1.4 }}>
        {laboratory.title}
      </h3>

      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.83rem", color: "#198754", fontWeight: 600, margin: 0 }}>
        {laboratory.subtitle}
      </p>

      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "0.88rem",
          color: "#6c757d",
          lineHeight: 1.6,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {laboratory.description}
      </p>

      <Button
        className="btn mt-auto w-100"
        style={{
          backgroundColor: "#000000",
          color: "#fff",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: "0.9rem",
          borderRadius: 8,
          border: "none",
        }}
      >
        Ir para Laboratório
      </Button>
    </div>
  </div>
);
import { BookOpen, Code, Cpu } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Editor Colaborativo",
      description: "Escreva código em tempo real com sua equipe usando o editor integrado.",
    },
    {
      icon: Cpu,
      title: "Hardware Real",
      description: "Interaja com robôs e dispositivos físicos remotamente via ESP32.",
    },
    {
      icon: BookOpen,
      title: "Conteúdo Guiado",
      description: "Cursos estruturados para aprender lógica de programação.",
    },
  ];
  
  return (
    <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                color: "#1a1a2e",
              }}
            >
              Tudo que você precisa para <span style={{ color: "#198754" }}>aprender</span>
            </h2>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                color: "#6c757d",
                maxWidth: 520,
                margin: "0.8rem auto 0",
              }}
            >
              Uma plataforma completa com editor de código, hardware real e conteúdo.
            </p>
          </div>

          <div className="row g-4">
            {features.map((f) => (
              <div key={f.title} className="col-12 col-md-4">
                <div
                  className="h-100 p-4 rounded-4 border"
                  style={{ transition: "box-shadow 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(25,135,84,0.12)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: 52, height: 52, backgroundColor: "rgba(25,135,84,0.1)" }}
                  >
                    <f.icon size={24} color="#198754" />
                  </div>
                  <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#2B2B2B", marginBottom: "0.5rem" }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", color: "#6c757d", lineHeight: 1.6, margin: 0 }}>
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
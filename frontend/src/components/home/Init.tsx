import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import laraColaborativo from "../../../public/lara_colaborativo.png"

export const Init = () => {
  return (
    <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f8fff9 0%, #e8f5e9 50%, #f8fff9 100%)",
          paddingTop: "100px !important",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <span
                className="badge mb-3 px-3 py-2"
                style={{
                  backgroundColor: "rgba(25,135,84,0.1)",
                  color: "#198754",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  borderRadius: 20,
                }}
              >
                Laboratório Acadêmico em Rede de Aprendizagem
              </span>

              <h1
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  lineHeight: 1.2,
                  color: "#1a1a2e",
                  marginBottom: "1.2rem",
                }}
              >
                Aprenda <span style={{ color: "#198754" }}>Programação</span> de forma colaborativa
              </h1>

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.05rem",
                  color: "#555",
                  lineHeight: 1.7,
                  maxWidth: 520,
                  marginBottom: "2rem",
                }}
              >
                O LARA é um ambiente colaborativo que auxilia o ensino e a aprendizagem
                por meio de programação contextualizada aplicada ao ensino de {" "}
                <strong>programação</strong>.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/register"
                  className="btn btn-success d-inline-flex align-items-center gap-2 px-4 py-3"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "1rem", borderRadius: 10 }}
                >
                  Começar Agora
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/courses"
                  className="btn btn-outline-secondary px-4 py-3"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "1rem", borderRadius: 10 }}
                >
                  Ver Cursos
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center position-relative">
              <div
                className="position-absolute rounded-circle"
                style={{
                  width: 300, height: 300,
                  background: "rgba(25,135,84,0.12)",
                  top: -20, right: -20,
                  filter: "blur(60px)",
                  zIndex: 0,
                }}
              />
              <img
                src={laraColaborativo}
                alt="Estudantes colaborando no LARA"
                className="img-fluid rounded-4 shadow-lg position-relative"
                style={{ zIndex: 1, maxHeight: 420, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
  )
}
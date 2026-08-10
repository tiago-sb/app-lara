import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export const Start = () => {
  return (
    <section className="py-5" style={{ background: "linear-gradient(135deg, #198754 0%, #0d6e42 100%)" }}>
        <div className="container py-4 text-center text-white">
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              marginBottom: "1rem",
            }}
          >
            Pronto para começar?
          </h2>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1rem",
              opacity: 0.9,
              maxWidth: 480,
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Junte-se a centenas de alunos que já estão aprendendo robótica de forma colaborativa.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link
              to="/register"
              className="btn btn-light px-4 py-3 d-inline-flex align-items-center gap-2"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#198754", borderRadius: 10 }}
            >
              Criar Conta Grátis
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/courses"
              className="btn px-4 py-3"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.6)",
                borderRadius: 10,
              }}
            >
              Explorar Cursos
            </Link>
          </div>
        </div>
      </section>
  )
}
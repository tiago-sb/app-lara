import { Mail, Send } from "lucide-react"
import contatoImg from "../../../public/lara_contato.png"
import { Link } from "react-router-dom"

export const ContactLara = () => {
  return (
    <section className="py-5" style={{ background: "linear-gradient(135deg, #f0faf4 0%, #e8f5e9 100%)" }}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="card border-0 shadow rounded-4 overflow-hidden">
                <div className="row g-0">
                  <div className="col-12 col-md-6 p-5 d-flex flex-column justify-content-center">
                    <h2 style={{fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#1a1a2e", marginBottom: "0.8rem"}}>
                      Gostou do nosso <span style={{ color: "#198754" }}>projeto</span>?
                    </h2>
                    <p
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "0.95rem",
                        color: "#6c757d",
                        lineHeight: 1.7,
                        marginBottom: "1.5rem",
                      }}
                    >
                      Entre em contato conosco para saber mais sobre o LARA,
                      tirar dúvidas ou propor parcerias.
                    </p>
                    <div
                      className="d-flex align-items-center gap-3 text-decoration-none mb-4"
                      style={{ color: "#2B2B2B" }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{ width: 44, height: 44, backgroundColor: "rgba(25,135,84,0.1)", flexShrink: 0 }}
                      >
                        <Mail size={18} color="#198754" />
                      </div>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}>
                        lara@uesb.edu.br
                      </span>
                    </div>

                    <Link
                      to="/contact"
                      className="btn btn-success d-inline-flex align-items-center gap-2 px-4 py-2"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, borderRadius: 8, width: "fit-content" }}
                    >
                      <Send size={16} />
                      Enviar Mensagem
                    </Link>
                  </div>

                  <div
                    className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-5"
                    style={{ backgroundColor: "rgba(25,135,84,0.05)" }}
                  >
                    <img src={contatoImg} alt="Entre em contato" className="img-fluid" style={{ maxHeight: 280 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
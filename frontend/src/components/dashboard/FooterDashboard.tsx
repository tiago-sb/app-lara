import { Mail, MapPin } from "lucide-react";
import logoLara from "../../../public/logo_lara.png";

export const FooterDashboard = () => {
  return (
    <footer
      style={{
        background: "#1F1B2E",
        color: "#FFFFFF",
      }}
    >
      <div className="container py-5">
        <div className="row gy-5 justify-content-between">
          {/* LOGO + DESCRIPTION */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column gap-3">
              <img
                src={logoLara}
                alt="LARA Logo"
                className="align-self-start"
                style={{
                  height: "50px", width: "auto",
                  objectFit: "contain", filter: "brightness(0) invert(1)",
                }}
              />
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.95rem", lineHeight: "1.7",
                  color: "rgba(255,255,255,0.78)", maxWidth: "320px",
                  margin: 0, textAlign: "justify"
                }}
              >
                Laboratório Acadêmico em Rede de Aprendizagem -
                Uma plataforma colaborativa para ensino de
                programação e robótica.
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column gap-3">
              <div style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.25rem" }}>
                Contato
              </div>

              <div className="d-flex flex-column gap-3">
                <a
                  href="mailto:lara@uesb.edu.br"
                  className="text-decoration-none d-flex align-items-center gap-2"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <Mail size={18} />
                  <span>lara@uesb.edu.br</span>
                </a>

                <div
                  className="d-flex align-items-start gap-2"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <MapPin
                    size={18}
                    style={{
                      marginTop: "3px",
                      flexShrink: 0,
                    }}
                  />

                  <a 
                    href="https://maps.google.com/?q=UESB+Vitória+da+Conquista" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      fontFamily: "Montserrat, sans-serif",
                      textDecoration: "none"
                    }}
                  >
                    Universidade Estadual do Sudoeste da Bahia - UESB
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="mt-5 pt-4 text-center"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            © {new Date().getFullYear()} LARA - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoLara from "../../../public/logo_lara.png";

export const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/laboratory", label: "Laboratórios" },
    { to: "/courses", label: "Cursos" },
    { to: "/about-us", label: "Quem Somos" },
    { to: "/publications", label: "Publicações" },
    { to: "/contact", label: "Contato" }
  ];

  return (
    <header
      className="position-fixed top-0 start-0 w-100 bg-white border-bottom"
      style={{
        zIndex: 1050,
        height: "80px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <div className="container h-100">
        <div
          className="d-flex align-items-center justify-content-between h-100"
        >
          {/* LOGO */}
          <Link
            to="/"
            className="d-flex align-items-center text-decoration-none"
          >
            <img
              src={logoLara}
              alt="LARA Logo"
              style={{
                height: "52px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={({ isActive }) => ({
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#198754" : "#2B2B2B",
                  textDecoration: "none",
                  position: "relative",
                  transition: "0.2s ease",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="d-none d-lg-flex align-items-center gap-2">
            <Link
              to="/login"
              className="btn btn-outline-dark rounded-pill px-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              Entrar
            </Link>

            <Link
              to="/register"
              className="btn btn-success rounded-pill px-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              Criar Conta
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="d-lg-none btn border-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir Menu"
            style={{
              boxShadow: "none",
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div
            className="d-lg-none bg-white border-top"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "80px",
              padding: "1rem",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <nav className="d-flex flex-column gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  style={({ isActive }) => ({
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#198754" : "#2B2B2B",
                    textDecoration: "none",
                  })}
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="d-flex flex-column gap-2 pt-3 border-top">
                <Link
                  to="/login"
                  className="btn btn-outline-dark rounded-pill"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entrar
                </Link>

                <Link
                  to="/register"
                  className="btn btn-success rounded-pill"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Criar Conta
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
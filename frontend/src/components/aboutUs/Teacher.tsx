import { professors } from "../../data/professors";

export const Teacher = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f0f9ff" }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 style={{fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "#1a1a2e"}}>
            Professores e <span style={{ color: "#049CFC" }}>Pesquisadores</span>
          </h2>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", color: "#6c757d", maxWidth: 520, margin: "0.8rem auto 0" }}>
            Nossa equipe de docentes é formada por especialistas em diversas áreas da computação.
          </p>
        </div>

        <div className="row g-4">
          {professors.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card border-0 rounded-4 p-4 text-center h-100 shadow-sm"
                style={{ transition: "box-shadow 0.2s, transform 0.2s" }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(4,156,252,0.18)`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: 72, height: 72,
                    background: `linear-gradient(135deg, ${"#049CFC"} 0%, ${"#0278c7"} 100%)`,
                  }}
                >
                  <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, color: "#f0f9ff", margin: 0 }}>
                    {p.firstName[0]}
                  </h2>
                </div>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#2B2B2B", marginBottom: 4 }}>
                  {p.name}
                </div>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#049CFC", fontWeight: 600, marginBottom: 4 }}>
                  {p.role}
                </div>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#6c757d" }}>
                  {p.area}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
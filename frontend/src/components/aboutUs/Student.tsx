import { students } from "../../data/students";

export const Student = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              color: "#1a1a2e",
            }}
          >
            Alunos <span style={{ color: "#049CFC" }}>Colaboradores</span>
          </h2>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", color: "#6c757d", maxWidth: 520, margin: "0.8rem auto 0" }}>
            Estudantes de graduação que contribuem para o desenvolvimento do projeto.
          </p>
        </div>

        <div className="row g-4">
          {students.map((s, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4">
              <div
                className="card border rounded-4 p-4 d-flex flex-row align-items-center gap-3 h-100 shadow-sm"
                style={{ transition: "box-shadow 0.2s, transform 0.2s", borderColor: "rgba(4,156,252,0.15)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(4,156,252,0.15)`;
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 52, height: 52, backgroundColor: "rgba(4,156,252,0.1)" }}
                >
                  <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, color: "#1a1a2e", margin: 0 }}>
                    {s.name[0]}
                  </h2>
                </div>
                <div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e" }}>
                    {s.name}
                  </div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#049CFC", fontWeight: 600 }}>
                    {s.role}
                  </div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#6c757d" }}>
                    {s.area}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { infos } from "../../data/infos"

export const InformationContact = () => {
  return (
    <div className="col-12 col-lg-5">
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "1.3rem",
          color: "#1a1a2e",
          marginBottom: "1.5rem",
        }}
      >
        Informações de contato
      </h2>

      <div className="d-flex flex-column gap-3 mb-5">
        {infos.map((info, i) => (
          <div
            key={i}
            className="d-flex align-items-start gap-3 p-3 rounded-3"
            style={{ backgroundColor: "#f4faf6" }}
          >
            <div
              className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
              style={{ width: 44, height: 44, backgroundColor: "rgba(25,135,84,0.1)" }}
            >
              <info.icon size={20} color="#198754" />
            </div>
            <div>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#2B2B2B", marginBottom: 2 }}>
                {info.label}
              </div>
              {
                info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#198754" }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#6c757d" }}>
                    {info.value}
                  </span>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
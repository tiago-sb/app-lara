import laraColaborativo from "../../../public/lara_robos.png"

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

          {/* Coluna de texto */}
          <div className="col-12 col-lg-6">
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
              Explore nossos laboratórios 
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
              O LARA conta com diversos <strong>experimentos</strong> de robótica, 
              tanto remotos quanto virtuais para melhor
              satisfazer as necessidades dos alunos e professores
            </p>
          </div>

          {/* Coluna da imagem */}
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
import laboratorioImg from "../../../public/lara_robos.png";

export const About = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <h2
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                color: "#1a1a2e",
                marginBottom: "1.2rem",
              }}
            >
              O que é o <span style={{ color: "#049CFC" }}>LARA</span>?
            </h2>
            <div
              className="d-flex flex-column gap-3"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.95rem", color: "#555", lineHeight: 1.8 }}
            >
              <p className="mb-0">
                O <strong>LARA (Laboratório Remoto em Ambiente Virtual de Aprendizagem)</strong> é
                um ambiente inovador para o aprendizado de programação, pertencente à 
                UESB (Universidade Estadual do Sudoeste da Bahia).
              </p>
              <p className="mb-0">
                Nossa missão é democratizar o acesso ao ensino prático de programação,
                permitindo que estudantes de qualquer lugar possam programar e controlar robôs reais
                através da internet, em um ambiente colaborativo e interativo.
              </p>
              <p className="mb-0">
                O projeto combina tecnologias modernas de desenvolvimento com equipamentos de
                robótica, criando uma experiência de aprendizado única que alinha o conceito
                de ambientes virtuais de aprendizagem com suporte a experimentos remotos e
                programação colaborativa.
              </p>
              <p className="mb-0">
                Com o LARA, professores podem criar cursos personalizados, acompanhar o progresso
                dos alunos e promover atividades colaborativas, enquanto estudantes desenvolvem
                habilidades práticas essenciais para o mercado de trabalho.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-center position-relative">
            <div
              className="position-absolute rounded-circle"
              style={{
                width: 280, height: 280,
                background: "rgba(4,156,252,0.15)",
                top: -20, right: -20,
                filter: "blur(60px)",
                zIndex: 0,
              }}
            />
            <img
              src={laboratorioImg}
              alt="Laboratório LARA"
              className="img-fluid rounded-4 position-relative"
              style={{ maxHeight: 400, objectFit: "cover", zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
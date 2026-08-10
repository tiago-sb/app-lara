import { Users, MessageSquare, Eye } from "lucide-react";
import { MainLayout } from "../components/mainLayout/MainLayout";
import colaboracaoImg from "../../public/lara_colaborativo_03.png";
import { Init } from "../components/home/Init";
import { Features } from "../components/home/Features";
import { ContactLara } from "../components/home/ContactLara";
import { Start } from "../components/home/Start";

export const Home = () => {
  const collaborationFeatures = [
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Até 5 participantes por sessão trabalhando juntos",
    },
    {
      icon: MessageSquare,
      title: "Interação em Tempo Real",
      description: "Chat integrado para comunicação instantânea",
    },
    {
      icon: Eye,
      title: "Visualização Compartilhada",
      description: "Veja as alterações dos colegas instantaneamente",
    },
  ];

  return (
    <MainLayout>
      <Init />
      <section className="py-5" style={{ backgroundColor: "#f4faf6" }}>
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 text-center order-2 order-lg-1">
              <img src={colaboracaoImg} alt="Colaboração no LARA" className="img-fluid" style={{ maxHeight: 380 }} />
            </div>

            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <h2
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  color: "#1a1a2e",
                  marginBottom: "1rem",
                }}
              >
                Colaboração <span style={{ color: "#198754" }}>em tempo real</span>
              </h2>

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                O LARA permite que alunos resolvam problemas e programem em equipe,
                interagindo em tempo real, visualizando as alterações dos colegas
                e solicitando apoio de monitores e professores durante os experimentos.
              </p>

              <div className="d-flex flex-column gap-3">
                {collaborationFeatures.map((f) => (
                  <div key={f.title} className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 shadow-sm">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                      style={{ width: 44, height: 44, backgroundColor: "rgba(25,135,84,0.1)" }}
                    >
                      <f.icon size={20} color="#198754" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#2B2B2B" }}>
                        {f.title}
                      </div>
                      <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#6c757d" }}>
                        {f.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Start />
      <ContactLara />
    </MainLayout>
  );
};
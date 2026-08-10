import { BookOpen, FileText, AlignLeft } from "lucide-react";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { Init } from "../components/publications/Init";
import { Publication } from "../components/publications/Publication";
import { ACCENT } from "../types/experiment/PublicationCardProps";
import { publications } from "../data/publications";

export const Publications = () => {
  const CATEGORIES = [
    { label: "Anais em Conferências", icon: <BookOpen size={16} /> },
    { label: "Periódicos",            icon: <FileText size={16} /> },
    { label: "Resumos Expandidos",    icon: <AlignLeft size={16} /> },
  ];
  
  return (
    <MainLayout>
      <Init />
      <section className="py-5 bg-white">
        <div className="container py-4">
          {
            CATEGORIES.map(({ label, icon }) => {
              const items = publications.filter(p => p.category === label);
              return (
                <div key={label} className="mb-5">
                  <div className="d-flex align-items-center gap-2 mb-4 pb-2"
                    style={{ borderBottom: `2px solid ${ACCENT.color}` }}
                  >
                    <span style={{ color: ACCENT.color }}>{icon}</span>
                    <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#1a1a2e", margin: 0 }}>
                      {label}
                    </h2>
                    
                    <span
                      className="badge ms-2"
                      style={{ backgroundColor: ACCENT.bg, color: ACCENT.color, fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem" }}
                    >
                      {items.length}
                    </span>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    {items.map(pub => <Publication key={pub.id} {...pub} />)}
                  </div>
                </div>
              );
          })}
        </div>
      </section>
    </MainLayout>
  )
};
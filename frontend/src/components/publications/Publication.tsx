import { Calendar, User, ArrowRight, BookOpen, FileText, AlignLeft } from "lucide-react";
import { ACCENT, type PublicationCardProps } from "../../types/experiment/PublicationCardProps";

const categoryIcon = (cat: string) => {
  if (cat === "Anais em Conferências") return <BookOpen size={16} />;
  if (cat === "Periódicos") return <FileText size={16} />;
  return <AlignLeft size={16} />;
};

export const Publication = ({ category, title, authors, date, summary, url }: PublicationCardProps) => (
  <div className="card border rounded-4 p-4 shadow-sm"
    style={{ transition: "box-shadow 0.2s, transform 0.2s" }}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = `0 8px 24px ${ACCENT.bg}`;
      e.currentTarget.style.transform = "translateY(-2px)";
    }}

    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = "";
      e.currentTarget.style.transform = "";
    }}
  >
    <span
      className="badge mb-2 d-inline-flex align-items-center gap-1"
      style={{
        color: ACCENT.color,
        fontFamily: "Montserrat, sans-serif",
        fontSize: "0.75rem",
        fontWeight: 600,
      }}
    >
      {categoryIcon(category)}
      {category}
    </span>

    <h3
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
        color: "#1a1a2e",
        marginBottom: "0.5rem",
        lineHeight: 1.5,
      }}
    >
      {title}
    </h3>

    <div
      className="d-flex flex-wrap gap-3 mb-2"
      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", color: "#6c757d" }}
    >
      <span className="d-flex align-items-center gap-1">
        <User size={14} /> {authors}
      </span>
      <span className="d-flex align-items-center gap-1">
        <Calendar size={14} /> {date}
      </span>
    </div>

    <p
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: "0.88rem",
        color: "#6c757d",
        lineHeight: 1.6,
        marginBottom: url ? "1rem" : 0,
      }}
    >
      {summary}
    </p>

    {url && (
      <a href={url} target="_blank"
        rel="noopener noreferrer"
        className="d-inline-flex align-items-center gap-1 text-decoration-none"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "0.85rem",
          fontWeight: 600,
          color: ACCENT.color,
        }}
      >
        Acessar publicação <ArrowRight size={14} />
      </a>
    )}
  </div>
);
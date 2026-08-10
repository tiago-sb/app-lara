import type { QuickActionCard } from "../../types/dashboard/quickAction/QuickActionCard";

type Props = {
  card: QuickActionCard;
};

export const ActionCard = ({ card }: Props) => {
  const Icon = card.icon;

  return (
    <div
      className="rounded-4 p-4 text-white h-100"
      style={{
        background: card.bg,
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div className="d-flex align-items-center justify-content-between mb-3">
        <Icon size={32} />

        <span
          className="badge px-3 py-2"
          style={{
            backgroundColor: card.badgeBg,
            fontFamily: "Montserrat, sans-serif",
            fontSize: "0.75rem",
          }}
        >
          {card.badge}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "1.2rem",
        }}
      >
        {card.title}
      </h3>

      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "0.85rem",
          opacity: 0.9,
          marginBottom: "1rem",
        }}
      >
        {card.desc}
      </p>

      <div className="d-grid gap-2">
        {card.actions.map((action) => {
          const ActionIcon = action.icon;
          const isLight = action.variant === "light";

          return (
            <button
              key={action.label}
              type="button"
              className="btn w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={action.onClick}
              disabled={action.disabled}
              style={{
                backgroundColor: isLight ? "#fff" : "rgba(255,255,255,0.2)",
                color: action.textColor ?? (isLight ? "#198754" : "#fff"),
                border: "1px solid rgba(255,255,255,0.3)",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: 8,
                opacity: action.disabled ? 0.5 : 1,
                cursor: action.disabled ? "not-allowed" : "pointer",
              }}
            >
              <ActionIcon size={16} />
              {action.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
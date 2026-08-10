import type { PropsQuickActions } from "../../types/dashboard/quickAction/QuickActionsProps";
import { ActionCard } from "./ActionCard";

export const QuickActions = ({ cards }: PropsQuickActions) => {
  return (
    <div className="row g-4 mb-5">
      {cards.map((card) => (
        <div key={card.title} className="col-12 col-md-4">
          <ActionCard card={card} />
        </div>
      ))}
    </div>
  );
};
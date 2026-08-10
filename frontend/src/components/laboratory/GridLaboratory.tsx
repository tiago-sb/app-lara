import { CardLaboratory } from "./CardLaboratory";
import { laboratories } from "../../data/laboratory";
import type { PropsTypeLaboratory } from "../../types/laboratory/PropsTypeLaboratory";

export const GridLaboratory = ({ type }: PropsTypeLaboratory) => {
  const filtered = laboratories.filter((lab) => lab.type === type);

  return (
    <section className="py-5">
      <div className="container py-3">
        <div className="row g-4">
          {filtered.map((laboratory) => (
            <div key={laboratory.id} className="col-12 col-md-6 col-lg-6">
              <CardLaboratory laboratory={laboratory} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
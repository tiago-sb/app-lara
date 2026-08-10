import { courses } from "../../data/courses";
import { CourseCard } from "./CourseCard";
import type { PropsTypeCouse } from "../../types/course/PropsTypeCouse";

export const GridCourses = ({ status }: PropsTypeCouse) => {
  const filtered = courses.filter((lab) => lab.status === status);

  return (
    <section className="py-5">
      <div className="container py-3">
        <div className="row g-4">
          {filtered.map((course) => (
            <div key={course.id} className="col-12 col-md-6 col-lg-6">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { TitleCourses } from "./TtileCourses";
import { GridCourses } from "./GridCourses";

export const GridCourse = () => {
  return (
    <section className="py-5">
      <div className="container py-3">
        <div className="row g-4">
          <TitleCourses title="Em andamento"/>                    
          <GridCourses status="andamento"/>

          <TitleCourses title="Finalizados"/>
          <GridCourses status="finalizado"/>
        </div>
      </div>
    </section>
  )
}
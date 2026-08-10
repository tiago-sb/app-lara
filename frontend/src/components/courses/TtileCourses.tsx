import type { PropsTitle } from "../../types/course/PropsTitle"

export const TitleCourses = ({ title }: PropsTitle) => {
  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3 mb-2 mt-4">
        <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#EC4434", margin: 0 }}> 
          {title}
        </h2>
        
        <div style={{ flex: 1, height: 3, background: "linear-gradient(90deg, #EC4434, transparent)", borderRadius: 4}}/>
        </div>
    </div>
  )
}
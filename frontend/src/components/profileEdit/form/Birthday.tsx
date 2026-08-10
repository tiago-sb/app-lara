import { Calendar } from "lucide-react"
import type { FormPropsProfile } from "../../../types/dashboard/FormPropsProfile"

export const Birthday = ({value, onChange}: FormPropsProfile) => {
  return (
    <div className="col-12 col-md-6">
      <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
        Data de nascimento
      </label>
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0">
          <Calendar size={15} color="#6c757d" />
        </span>
        <input
          type="date"
          name="birth_date"
          className="form-control border-start-0 ps-0"
          value={value}
          onChange={onChange}
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
        />
      </div>
    </div>
  )
}
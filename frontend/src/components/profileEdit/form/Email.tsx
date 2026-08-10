import { Mail } from "lucide-react"
import type { FormPropsProfile } from "../../../types/dashboard/FormPropsProfile"

export const Email = ({value, onChange}: FormPropsProfile) => {
  return (
    <div className="col-12">
      <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
        E-mail
      </label>
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0">
          <Mail size={15} color="#6c757d" />
        </span>
        <input
          type="email"
          name="email"
          className="form-control border-start-0 ps-0"
          value={value}
          onChange={onChange}
          style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
        />
      </div>
    </div>
  )
}
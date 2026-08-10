import type { FormPropsContact } from "../../../types/contact/FormPropsContact"

export const Email = ({value, onChange}: FormPropsContact) => {
  return (
    <div className="col-12 col-md-6">
      <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
        E-mail
      </label>
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="seu@email.com"
        value={value}
        onChange={onChange}
        required
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
      />
    </div>
  )
}
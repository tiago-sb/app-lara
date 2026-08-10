import type { FormPropsContact } from "../../../types/contact/FormPropsContact"

export const Name = ({value, onChange}: FormPropsContact) => {
  return (
    <div className="col-12 col-md-6">

      <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
        Nome completo
      </label>
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Seu nome"
        value={value}
        onChange={onChange}
        required
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
      />
    </div>
  )
}
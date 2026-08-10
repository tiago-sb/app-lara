import type { FormPropsContact } from "../../../types/contact/FormPropsContact"

export const Subject = ({value, onChange}: FormPropsContact) => {
  return (
    <div className="col-12">
      <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
        Assunto
      </label>
      <input
        type="text"
        name="subject"
        className="form-control"
        placeholder="Assunto da mensagem"
        value={value}
        onChange={onChange}
        required
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem" }}
      />
    </div>

  )
}
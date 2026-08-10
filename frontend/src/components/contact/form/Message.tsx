import type { FormPropsContactMessage } from "../../../types/contact/FormPropsContactMessage"

export const Message = ({ value, onChange }: FormPropsContactMessage) => {
  return (
    <div className="col-12">
      <label className="form-label" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
        Mensagem
      </label>
      <textarea
        name="message"
        className="form-control"
        placeholder="Escreva sua mensagem aqui..."
        rows={6}
        value={value}
        onChange={onChange}
        required
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", resize: "none" }}
      />
    </div>
  )
}
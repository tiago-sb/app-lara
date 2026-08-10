import { Send } from "lucide-react";
import { useState } from "react";
import { Name } from "./form/Name";
import { Email } from "./form/Email";
import { Subject } from "./form/Subject";
import { Message } from "./form/Message";
import { ShipmentMade } from "./ShipmentMade";

export const FormContact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:lara@uesb.edu.br?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div className="col-12 col-lg-7">
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "1.3rem",
          color: "#1a1a2e",
          marginBottom: "1.5rem",
        }}
      >
        Envie uma mensagem
      </h2>

      {sent && <ShipmentMade /> }
      
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <Name value={form.name} onChange={handleChange} />
          <Email value={form.email} onChange={handleChange} />
          <Subject value={form.subject} onChange={handleChange} />
          <Message value={form.message} onChange={handleChange} />

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-success d-flex align-items-center justify-content-center gap-2 px-4 py-2 w-100"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.95rem", borderRadius: 8 }}
            >
              <Send size={16} />
              Enviar Mensagem
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
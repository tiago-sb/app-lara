import { Save } from "lucide-react";
import type { FormProfileProps } from "../../../types/dashboard/FormProfileProps";
import { Username } from "./Username";
import { Name } from "./Name";
import { Email } from "./Email";
import { Localization } from "./Localization";
import { Birthday } from "./Birthday";

export const FormProfile = ({form, onChange, onSubmit, saving}: FormProfileProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="row g-3">
        {/* Username */}
        <Username value={form.username} onChange={onChange} />

        {/* Nome */}
        <Name value={form.name} onChange={onChange} />

        {/* Email */}
        <Email value={form.email} onChange={onChange} />

        {/* Localização */}
        <Localization value={form.location} onChange={onChange} />

        {/* Data de nascimento */}
        <Birthday value={form.birth_date} onChange={onChange} />
      </div>

      <button
        type="submit"
        className="btn btn-success w-100 mt-4 d-flex align-items-center justify-content-center gap-2 py-2"
        disabled={saving}
        style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.95rem", borderRadius: 8 }}
      >
        {saving
          ? <span className="spinner-border spinner-border-sm" role="status" />
          : <Save size={16} />
        }
        {saving ? "Salvando..." : "Salvar Alterações"}
      </button>
    </form>
  )
}
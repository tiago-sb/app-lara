import { User } from "lucide-react"

export const InitForm = () => {
  return (
    <div className="text-center mb-4">
      <div
        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
        style={{ width: 80, height: 80, backgroundColor: "rgba(25,135,84,0.1)" }}
      >
        <User size={36} color="#198754" />
      </div>
      <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#1a1a2e" }}>
        Editar Perfil
      </h2>
      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "#6c757d" }}>
        Atualize suas informações pessoais
      </p>
    </div>
  )
}
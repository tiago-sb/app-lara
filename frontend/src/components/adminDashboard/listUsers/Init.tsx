import type { PropsInitListUser } from "../../../types/dashboardAdmin/PropsInitListUser";

export const Init = ({ users }: PropsInitListUser) => {
  const font = "Montserrat, sans-serif";

  return (
    <div className="px-4 py-3 border-bottom d-flex align-items-center justify-content-between">
      <span style={{ fontFamily: font, fontWeight: 700, fontSize: "1rem", color: "#1a1a2e" }}>
        Todos os usuários
      </span>
      <span style={{ fontFamily: font, fontSize: "0.8rem", color: "#6c757d" }}>
        {users} registros
      </span>
    </div>
  )
}
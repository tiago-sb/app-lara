import { Crown, Shield, ShieldOff } from "lucide-react"
import type { TableListUsersProps } from "../../../types/dashboardAdmin/TableListUsersProps"

export const TableListUserBody = ({ users, promoting, onPromote }: TableListUsersProps) => {
  const font = "Montserrat, sans-serif";
  
  return (
    <tbody>
      {users.map(u => (
        <tr key={u.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
          <td style={{ padding: "12px 16px", fontSize: "0.85rem", color: "#6c757d" }}>{u.id}</td>
          <td style={{ padding: "12px 16px" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#2B2B2B" }}>{u.username}</div>
            {u.name && <div style={{ fontSize: "0.78rem", color: "#6c757d" }}>{u.name}</div>}
          </td>
          <td style={{ padding: "12px 16px", fontSize: "0.85rem", color: "#6c757d" }}>{u.email}</td>
          <td style={{ padding: "12px 16px" }}>
            <span
              className="badge"
              style={{
                backgroundColor: u.is_active ? "rgba(25,135,84,0.1)" : "rgba(220,53,69,0.1)",
                color: u.is_active ? "#198754" : "#dc3545",
                fontSize: "0.75rem",
              }}
            >
              {u.is_active ? "Ativo" : "Inativo"}
            </span>
          </td>
          <td style={{ padding: "12px 16px" }}>
            <span
              className="badge d-inline-flex align-items-center gap-1"
              style={{
                backgroundColor: u.is_staff ? "rgba(253,126,20,0.1)" : "rgba(108,117,125,0.1)",
                color: u.is_staff ? "#fd7e14" : "#6c757d",
                fontSize: "0.75rem",
              }}
            >
              {u.is_staff ? <Crown size={11} /> : null}
              {u.is_staff ? "Staff" : "Aluno"}
            </span>
          </td>
          <td style={{ padding: "12px 16px" }}>
            <button
              className="btn btn-sm d-inline-flex align-items-center gap-1"
              disabled={promoting === u.id}
              onClick={() => onPromote(u.id!, u.is_staff ?? false)}
              style={{
                fontFamily: font,
                fontSize: "0.78rem",
                fontWeight: 600,
                backgroundColor: u.is_staff ? "rgba(220,53,69,0.08)" : "rgba(253,126,20,0.08)",
                color: u.is_staff ? "#dc3545" : "#fd7e14",
                border: "none",
                borderRadius: 6,
              }}
            >
              {promoting === u.id
                ? <span className="spinner-border spinner-border-sm" />
                : u.is_staff
                  ? <><ShieldOff size={13} /> Remover staff</>
                  : <><Shield size={13} /> Promover</>
              }
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
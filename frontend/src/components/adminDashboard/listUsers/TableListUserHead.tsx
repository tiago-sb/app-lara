export const TableListUserHead = () => {
  return (
    <thead style={{ backgroundColor: "#f4faf6" }}>
      <tr>
        <th style={{ fontSize: "0.8rem", color: "#6c757d", fontWeight: 600, padding: "12px 16px" }}>#</th>
        <th style={{ fontSize: "0.8rem", color: "#6c757d", fontWeight: 600, padding: "12px 16px" }}>Usuário</th>
        <th style={{ fontSize: "0.8rem", color: "#6c757d", fontWeight: 600, padding: "12px 16px" }}>E-mail</th>
        <th style={{ fontSize: "0.8rem", color: "#6c757d", fontWeight: 600, padding: "12px 16px" }}>Status</th>
        <th style={{ fontSize: "0.8rem", color: "#6c757d", fontWeight: 600, padding: "12px 16px" }}>Tipo</th>
        <th style={{ fontSize: "0.8rem", color: "#6c757d", fontWeight: 600, padding: "12px 16px" }}>Ações</th>
      </tr>
    </thead>
  )
}
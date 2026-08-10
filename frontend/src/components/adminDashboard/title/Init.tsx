export const Init = () => {
  const font = "Montserrat, sans-serif";
  
  return (
    <div className="mb-5">
      <h1 style={{ fontFamily: font, fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "#1a1a2e" }}>
        Painel Administrativo
      </h1>
      <p style={{ fontFamily: font, fontSize: "0.95rem", color: "#6c757d" }}>
        Gerenciamento de usuários e experimentos do sistema LARA.
      </p>
    </div>
  )
}
export const Init = () => {
  return (
    <section
      className="py-5 text-center"
      style={{
        background: "linear-gradient(135deg, #f8fff9 0%, #e8f5e9 50%, #f8fff9 100%)",
        paddingTop: "120px !important",
      }}
    >
      <div className="container py-5">
        <h1
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#1a1a2e",
            marginBottom: "1rem",
          }}
        >
          Entre em <span style={{ color: "#198754" }}>Contato</span>
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.05rem",
            color: "#6c757d",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Tem dúvidas, sugestões ou quer propor uma parceria? Fale com a equipe do LARA.
        </p>
      </div>
    </section>
  )
}
export const Init = () => {
  return (
    <section
      className="py-5 text-center"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f3ff 50%, #f0f9ff 100%)",
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
          Quem <span style={{ color: "#049CFC" }}>Somos</span>
        </h1>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.05rem",
            color: "#6c757d",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Conheça a equipe por trás do LARA e nossa missão de contribuir
          no ensino de programação.
        </p>
      </div>
    </section>
  )
}
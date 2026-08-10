export const Init = () => {
  return (
    <section
      className="py-5 text-center"
      style={{
        backgroundColor: "#fffdf5",
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
          Nossas <span style={{ color: "#fd7e14" }}>Publicações</span>
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
          Artigos científicos, pesquisas e relatos produzidos
          pela equipe do LARA ao longo dos anos.
        </p>
      </div>
    </section>
  )
}
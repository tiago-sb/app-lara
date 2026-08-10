export const Init = () => {
  return (
    <section
      className="py-5 text-center"
      style={{
        background: "linear-gradient(135deg, #fff5f5 0%, #ffe0de 50%, #fff5f5 100%)",
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
          Nossos <span style={{ color: "#EC4434" }}>Cursos</span>
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
          Explore cursos em programação e robótica,
          preparados por docentes experientes, utilizando laboratórios
          remotos.
        </p>
      </div>
    </section>
  );
};
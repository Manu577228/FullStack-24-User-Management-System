function Footer() {
  return (
    <footer
      className="text-center py-3 mt-auto"
      style={{
        background: "linear-gradient(135deg, #0f0f17, #1a1a28)",
        color: "#a1a1b3",
        fontFamily: "Cinzel, serif",
        letterSpacing: "1px",
      }}
    >
      <div className="container">
        <span className="me-2">© 2026 Copyrights Reserved</span>
        <a
          href="https://www.youtube.com/@codewithBharadwaj"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Cinzel, serif",
            letterSpacing: "1px",
          }}
          className="text-info fw-bold text-decoration-none"
        >
          Bharadwaj
        </a>
      </div>
    </footer>
  );
}

export default Footer;

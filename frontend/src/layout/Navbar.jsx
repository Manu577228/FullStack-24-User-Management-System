import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg"
      style={{ background: "linear-gradient(135deg, #0f0f17, #1a1a28)" }}
    >
      <div className="container-fluid px-4">
        <Link
          className="navbar-brand"
          style={{
            fontFamily: "Cinzel, serif",
            letterSpacing: "2px",
            color: "#e6c77a",
          }}
          to="/"
        >
          Bharadwaj CRUD
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <Link
            className="btn btn-outline-info px-4 py-2 rounded-pill fw-semibold"
            to="/addUser"
          >
            + Add User
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

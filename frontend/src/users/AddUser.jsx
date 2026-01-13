import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-dark text-light text-center fs-4 fw-bold rounded-top-4">
              Register New User
            </div>

            <div className="card-body p-4">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name here!"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                  <label>Name</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Username here!"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                  <label>Username</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email here!"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                  <label>Email</label>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button
                    type="submit"
                    className="btn btn-outline-success px-4 rounded-pill fw-semibold"
                  >
                    Submit ✓
                  </button>

                  <Link
                    className="btn btn-outline-danger px-4 rounded-pill fw-semibold"
                    to="/"
                  >
                    Cancel ✕
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;

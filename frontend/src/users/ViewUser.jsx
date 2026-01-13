import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-info text-dark text-center fs-4 fw-bold rounded-top-4">
              User Profile
            </div>

            <div className="card-body p-4">
              <div className="text-center mb-4">
                <div
                  className="rounded-circle bg-secondary text-white d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px", fontSize: "32px" }}
                >
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <h5 className="fw-bold mb-0">{user.name}</h5>
                <small className="text-muted">@{user.username}</small>
              </div>

              <ul className="list-group list-group-flush fs-6">
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-semibold">User ID</span>
                  <span>{user.id}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-semibold">Email</span>
                  <span>{user.email}</span>
                </li>
              </ul>

              <div className="text-center mt-4">
                <Link
                  className="btn btn-outline-secondary px-4 rounded-pill fw-semibold"
                  to={"/"}
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;

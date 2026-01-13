import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:8080/users");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-dark text-light fs-4 fw-bold rounded-top-4">
          User Management
        </div>

        <div className="card-body p-4">
          <div className="table-responsive">
            <table className="table table-hover align-middle text-center shadow-lg rounded-4 overflow-hidden">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="fw-semibold">{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        className="btn btn-sm btn-outline-primary mx-1 px-3 rounded-pill"
                        to={`/viewuser/${user.id}`}
                      >
                        View
                      </Link>

                      <Link
                        className="btn btn-sm btn-outline-warning mx-1 px-3 rounded-pill"
                        to={`/edituser/${user.id}`}
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-sm btn-outline-danger mx-1 px-3 rounded-pill"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

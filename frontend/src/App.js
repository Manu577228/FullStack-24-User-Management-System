import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar />

        <div className="flex-grow-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path="/edituser/:id" element={<EditUser />} />
            <Route path="/viewuser/:id" element={<ViewUser />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

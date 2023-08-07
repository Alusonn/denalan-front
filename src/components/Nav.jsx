import image from "../data/Logo,sin,fondiu.png";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/Nav.css";

export const Nav = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={image}
            className="rounded float-left m-2 "
            style={{ width: 200, height: 90 }}
            alt="logo"
          />
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/casa-tinta-roja-1"
                className={`nav-link ${
                  location.pathname === "/casa-tinta-roja-1" ? "active" : ""
                }`}
              >
                Tinta Roja 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/casa-tinta-roja-2"
                className={`nav-link ${
                  location.pathname === "/casa-tinta-roja-2" ? "active" : ""
                }`}
              >
                Tinta Roja 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/departamento"
                className={`nav-link ${
                  location.pathname === "/departamento" ? "active" : ""
                }`}
              >
                Departamento
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className={`nav-link ${
                  location.pathname === "/contacto" ? "active" : ""
                }`}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

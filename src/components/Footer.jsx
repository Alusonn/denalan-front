
import whatsapp from "../data/whatsapp.svg";
import facebook from "../data/Facebook.svg";
import instagram from "../data/Instagram.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mx-2">
      <Link
        to={"https://api.whatsapp.com/send?phone=5492267520604"}
        target="_blank"
        className="redes"
        style={{ textDecoration: "none" }}
      >
        <img
          src={whatsapp}
          alt="Whatsapp de Denalan Alquileres"
          className="img-redes"
        />
        <h3 className="h3-redes">+54 9 2267520604</h3>
      </Link>
      <Link
        to={"/casa-tinta-roja-1"}
        target="_blank"
        className="redes"
        style={{ textDecoration: "none" }}
      >
        <img src={facebook} alt="Facebook - Denalan" className="img-redes" />
        <h3 className="h3-redes">Deanalan Alquileres</h3>
      </Link>
      <Link
        to={"https://www.instagram.com/denalanvg/"}
        target="_blank"
        className="redes"
        style={{ textDecoration: "none" }}
      >
        <img
          src={instagram}
          alt="Instagram - @denalanvg"
          className="img-redes"
        />
        <h3 className="h3-redes">@denalanalquileres</h3>
      </Link>
    </footer>
  );
};

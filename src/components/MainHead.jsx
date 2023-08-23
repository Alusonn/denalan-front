import React from "react";
import { Link } from "react-router-dom";
import casaTintaRoja from "../data/foto24.webp";
import departamentoDenalan from "../data/foto34.webp"
import cabañaDenalan from "../data/foto26.webp";
import logo from "../data/Logo,sin,fondiu.png";
import whatsapp from "../data/whatsapp.svg";
import facebook from "../data/Facebook.svg";
import instagram from "../data/Instagram.svg";
import imagenMar from "../data/mar-Villa-Gesell.jpg";
import "../styles/components/mainHead.css";





const MainHead = () => {
  return (
    <div className="head">
      <div className="main">
        <Link to="/" className="">
          <img src={logo}  className="logo" alt="logo" />
        </Link>
        <h2 className="main-h2">Villa Gesell</h2>
        <img src={imagenMar} alt="" className="diseño-img-final" />
      </div>
      <div className="container-main">
        <Link to={"/casa-tinta-roja-1"}>
          <img
            src={casaTintaRoja}
            alt="Casa Tinta Roja 1"
            className="diseño-img primer-imagen"
          />
        </Link>
        <Link to={"/departamento"}>
          <img
            src={departamentoDenalan}
            alt="Departamento Denalan"
            className="diseño-img z"
          />
        </Link>
        <Link to={"/casa-tinta-roja-2"}>
          <img
            src={cabañaDenalan}
            alt="Casa Tinta Roja 2"
            className="diseño-img z"
          />
        </Link>
      </div>

      <div className="redes-sociales">
        <Link
          to={"https://api.whatsapp.com/send?phone=5492267520604"}
          target="_blank"
          className=""
        >
          <h3 className="h3-redes">+5492267520604</h3>
          <img
            src={whatsapp}
            alt="Whatsapp de Denalan Alquileres"
            className=""
          />
        </Link>
        <Link to={"/casa-tinta-roja-1"}>
          <h3 className="h3-redes">Deanalan Alquileres</h3>
          <img src={facebook} alt="" />
        </Link>
        <Link to={"https://www.instagram.com/denalanvg/"} target="_blank">
          <h3 className="h3-redes">@denalanalquileres</h3>
          <img src={instagram} alt="" />
        </Link>
      </div>
      
    </div>
  );
};

export default MainHead
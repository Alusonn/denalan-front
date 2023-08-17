import logoNegro from "../data/SodaPDF-converted-F99D55AE-D025-46D8-8BFE-5F203C5846D6-removebg-preview.png";
import "../styles/components/Header.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";
import { sliderTintaRojaMain } from "../helpers/sliderTintaRoja";
import ReactImageGallery from "react-image-gallery";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import { RiParkingLine } from "react-icons/ri";

export const Header = ({ personasCantidad, habitacionesCantidad, bañosCantidad, autosCantidad, titulo, descripcion }) => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h1 className="titulo">{ titulo }</h1>
            </div>

            {/* Ubicacion del logo de la izquierda que esta en vertical */}

            <div className="col-12 col-sm-2">
              <Link to={"/"}>
                <img src={logoNegro} alt="" className="img-vertical w-100" />
              </Link>
            </div>
            <div className="col-12 col-sm-8 my-2">
              {/* Galeria desde NPM en react */}

              <ReactImageGallery
                items={sliderTintaRojaMain}
                lazyLoad={false}
                showPlayButton={false}
                autoPlay={true}
                slideDuration={500}
                slideInterval={6000}
                showFullscreenButton={false}
              />
              <h4 className="numero-wpp my-3">
                <AiOutlineWhatsApp className="mb-2" color="#FFFFFF"/> +54 9 2267520604
              </h4>
            </div>
            <div className="col-12 col-sm-2">
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <BsPeople size={60} className="mt-3" color="#FFFFFF"/>
                </span>
                <h5>
                  Personas
                  <br />
                  { personasCantidad }
                </h5>
              </div>
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <BiBed size={60} className="mt-3" color="#FFFFFF"/>
                </span>
                <h5>
                  Habitaciones
                  <br />{ habitacionesCantidad }
                </h5>
              </div>
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <MdOutlineBathtub size={60} className="mt-3" color="#FFFFFF"/>
                </span>
                <h5>
                  Baños
                  <br />{ bañosCantidad }
                </h5>
              </div>
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <RiParkingLine size={60} className="mt-3" color="#FFFFFF" />
                </span>
                <h5>
                  Autos <br />{ autosCantidad }
                </h5>
              </div>
            </div>
            <div className="col ">
              <p className="d-inline-block texto-desc p-3">
                { descripcion }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

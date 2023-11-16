import { Footer } from "../components/Footer";
import "../styles/components/CasaPage.css";
import "../styles/components/Styles.css";
import ReactImageGallery from "react-image-gallery";
import {
  sliderDepartamentoFirstSection,
  sliderDepartamentoMain,
  sliderDepartamentoSecondSection,
} from "../helpers/sliderDepartamento";
import logoNegro from "../data/SodaPDF-converted-F99D55AE-D025-46D8-8BFE-5F203C5846D6-removebg-preview.png";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import ReactPlayer from "react-player";

export const DeptoPage = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h1 className="titulo">Departamento Denalan</h1>
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
                items={sliderDepartamentoMain}
                lazyLoad={false}
                showPlayButton={false}
                autoPlay={true}
                slideDuration={500}
                slideInterval={6000}
                showFullscreenButton={false}
              />
              <h4 className="numero-wpp my-3">
                <AiOutlineWhatsApp className="mb-2" color="#655D51" size={40} />{" "}
                +54 9 2267520604
              </h4>
            </div>
            <div className="col-12 col-sm-2">
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <BsPeople size={60} className="mt-3" color="#000000" />
                </span>
                <h5>
                  Personas
                  <br />4
                </h5>
              </div>
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <BiBed size={60} className="mt-3" color="#000000" />
                </span>
                <h5>
                  Habitaciones
                  <br />1
                </h5>
              </div>
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <MdOutlineBathtub
                    size={60}
                    className="mt-3"
                    color="#000000"
                  />
                </span>
                <h5>
                  Baños
                  <br />1
                </h5>
              </div>
            </div>
            <div className="col ">
              <p className="d-inline-block texto-desc p-3">
                Departamento ubicado en zona centro de Villa Gesell, a 50 metros
                donde comienza la peatonal y a 2 cuadras de la playa con
                capacidad para 4 personas, con excelente WIFI de fibra optica y
                Aire acondicionado frio-calor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <ReactImageGallery
              items={sliderDepartamentoFirstSection}
              lazyLoad={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={500}
              slideInterval={6000}
              showFullscreenButton={false}
            />
          </div>
          <div className="col-12">
            <div className="d-inline-block texto-desc p-3">
              <p>
                Te contamos un poco mas... <br />
                En el comedor tenes 2 camas y 1 TV de 40" con chromcast , en la
                cocina podes encontrar pava electrica, tostadora, horno
                electrico con anafe, microondas y todos los elementos para
                cocinar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <ReactImageGallery
              items={sliderDepartamentoSecondSection}
              lazyLoad={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={500}
              slideInterval={6000}
              showFullscreenButton={false}
            />
          </div>
          <div className="col-12">
            <div className="d-inline-block texto-desc p-3">
              <p>
                En la habitacion tenes 1 cama matrimonial y un TV 32" equipada
                con almohadas , <br /> frazadas y cubrecama mas 1 climatizador{" "}
                <br /> *NO contamos con servicio de ropa blanca*
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="videoPlayer">
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=U1kutwcuoio"}
              controls={true}
              width={"100%"}
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12703.503988424574!2d-56.97437917590331!3d-37.2506494775409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b60f590f463e5%3A0x8a808a13c77eb09b!2sDepartamento%20Denalan!5e0!3m2!1ses!2sar!4v1692743535566!5m2!1ses!2sar"
            width="600"
            height="450"
            className="col border-radius-1"
          ></iframe>
          <div className="col">
            <h3 className="text-center">Ubicacion</h3>
            <hr />
            <strong>La direccion es avenida 3 entre 102 y 104</strong>
            <hr />
            <ul>
              <li className="lista-ubicacion">Sobre la calle principal</li>
              <li className="lista-ubicacion">En el pleno centro</li>
              <li className="lista-ubicacion">3 Cuadras de la playa</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

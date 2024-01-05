import ReactImageGallery from "react-image-gallery";
import { Footer } from "../components/Footer";
import "../styles/components/CasaPage.css";
import "../styles/components/Styles.css";
import {
  sliderTintaRojaFirstSection,
  sliderTintaRojaMain,
  sliderTintaRojaSecondSection,
  sliderTintaRojaThirdSection,
} from "../helpers/sliderTintaRoja";
import logoNegro from "../data/SodaPDF-converted-F99D55AE-D025-46D8-8BFE-5F203C5846D6-removebg-preview.png";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import { RiParkingLine } from "react-icons/ri";
import ReactPlayer from "react-player";

export const CasaPage = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h1 className="titulo">Casa Tinta Roja</h1>
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
              <Link
                to={"https://api.whatsapp.com/send?phone=5492267520604"}
                target="_blank"
                className="redes"
                style={{ textDecoration: "none" }}
              >
                <h4 className="numero-wpp my-3">
                  <AiOutlineWhatsApp
                    className="mb-2"
                    color="#655D51"
                    size={40}
                  />{" "}
                  +54 9 2267520604
                </h4>
              </Link>
            </div>
            <div className="col-12 col-sm-2">
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <BsPeople size={60} className="mt-3" color="#000000" />
                </span>
                <h5>
                  Personas
                  <br />
                  10
                </h5>
              </div>
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <BiBed size={60} className="mt-3" color="#000000" />
                </span>
                <h5>
                  Habitaciones
                  <br />3
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
                  <br />2
                </h5>
              </div>
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <RiParkingLine size={60} className="mt-3" color="#000000" />
                </span>
                <h5>
                  Autos <br />3
                </h5>
              </div>
            </div>
            <div className="col ">
              <p className="d-inline-block texto-desc p-3">
                Es una casa caracterizada por la *exclusividad* familiar, con
                capacidad de hasta 10 personas con WIFI de fibra optica .
                Ubicada en zona sur de la Ciudad de Villa Gesell, con amplio
                parque, parrilla, mesa de ping pong, alarma y rejas en todo su
                perimetro Mascotas: maximo 2 de tamaño pequeño
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* First Section */}
      <div className="container text-center">
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <ReactImageGallery
              items={sliderTintaRojaFirstSection}
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
                Te contamos un poco mas... En la cocina tenemos pava electrica,
                tostadora, horno, anfe y todos los elementos para cocinar. Un
                lavadero con plancha y mesa, Lavatorio y Lavarropas automatico
                <br />
                Nuestro living tiene un TV de 32" con chromecast con sillones
                para disfrutar y al lado un amplio comedor
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}

      <div className="container text-center">
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <ReactImageGallery
              items={sliderTintaRojaSecondSection}
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
                En planta baja nos encontramos con 2 habitaciones y 1 baño En
                una habitación con 1 cama matrimonial y la otra habitación con 2
                literas Todas las habitaciones equipadas con almohadas ,
                frazadas, cubrecama y ventilador *NO contamos con servicio de
                ropa blanca*
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}

      <div className="container text-center">
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <ReactImageGallery
              items={sliderTintaRojaThirdSection}
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
                En planta alta tenemos 1 habitacion con 1 baño en suite y balcón
                con vista al jardin la misma esta integrada por 1 cama litera (2
                pers.) , 1 cama matrimonial (2 pers.), placard, 1 TV 32" con
                tecnologia Smart TV
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
              url={"https://www.youtube.com/watch?v=qp5wzJa_g68"}
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.7125934518579!2d-56.98933826780083!3d-37.27497506569251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b60a29f5a4e4d%3A0xd94024b89a8cfa14!2sChalet%20Tinta%20Roja!5e0!3m2!1ses-419!2sar!4v1692823475545!5m2!1ses-419!2sar"
            width="600"
            height="450"
            className="col"
          ></iframe>
          <div className="col">
            <h3 className="text-center">Ubicacion</h3>
            <strong>Av. 7 E/ Paseo 127 y 128 Centro-Sur de Villa Gesell</strong>
            <hr />
            <ul>
              <li className="lista-ubicacion">7 cuadras del mar</li>
              <li className="lista-ubicacion">3 cuadras de zona comercial</li>
              <li className="lista-ubicacion">20 cuadras de peatonal</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

import ReactImageGallery from "react-image-gallery";
import { Footer } from "../components/Footer";
import "../styles/components/CasaPage.css";
import logoNegro from "../data/SodaPDF-converted-F99D55AE-D025-46D8-8BFE-5F203C5846D6-removebg-preview.png";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import { RiParkingLine } from "react-icons/ri";
import {
  sliderTintaRoja2FirstSection,
  sliderTintaRoja2Main,
  sliderTintaRoja2SecondSection,
} from "../helpers/sliderTintaRoja2";
export const CasaPage2 = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h1 className="titulo">Casa Tinta Roja 2</h1>
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
                items={sliderTintaRoja2Main}
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
              <div className="octagono my-1 mx-1 d-inline-block">
                <span>
                  <RiParkingLine size={60} className="mt-3" color="#000000" />
                </span>
                <h5>
                  Autos <br />2
                </h5>
              </div>
            </div>
            <div className="col ">
              <p className="d-inline-block texto-desc p-3">
                Es una casa con capacidad hasta 4 personas, con jardin
                individual, parrilla y WIFI de fibra optica . Ubicada en zona
                sur de la Ciudad de Villa Gesell, zona muy tranquila ideal para
                descansar en familia
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
              items={sliderTintaRoja2FirstSection}
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
                tostadora, horno con 4 hornallas y todos los elementos para
                cocinar.
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
              items={sliderTintaRoja2SecondSection}
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
                El dormitorio tiene aire acondicionado frio-calor 1 cama
                matrimonial y 1 cama sillon con cama carrito debajo y 1 baño .
                Te dejamos almohadas, frazadas y cubrecamas *NO contamos con
                servicio de ropa blanca* Mascotas: maximo 2 de tamaño pequeño
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.7125934518579!2d-56.98933826780083!3d-37.27497506569251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b6157928eab03%3A0x601c7d8493118138!2sCaba%C3%B1a%20Tinta%20Roja%202!5e0!3m2!1ses-419!2sar!4v1692823772668!5m2!1ses-419!2sar"
            width="600"
            height="450"
            className="col"
          ></iframe>
          <div className="col">
            <h3 className="text-center">Ubicacion</h3>
            <hr />
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

import { Footer } from "../components/Footer";
import "../styles/components/CasaPage.css";
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
                  <br />6
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
                Una vivienda especial para jovenes o para familia de hasta 6
                miembros, muy comodo por la ubicacion del centro de gesell y por
                sobre todo, por las playas geselinas, tenemos cocina y todos los
                utensillos para poder cocinar.
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
                Te contamos un poco mas... En la cocina tenemos pava electrica,
                tostadora, horno, anfe y todos los elementos para cocinar. Un
                lavadero con plancha y mesa, Lavatorio y Lavarropas automatico.
                <br />
                Nuestro living tiene un TV de 32" con chromecast con sillones
                para disfrutar y al lado un amplio comedor
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
                con almohadas , frazadas y cubrecama mas 1 climatizador *NO
                contamos con servicio de ropa blanca*
              </p>
            </div>
          </div>
        </div>
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


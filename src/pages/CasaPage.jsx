import ReactImageGallery from "react-image-gallery";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/components/CasaPage.css";
import { sliderTintaRojaFirstSection, sliderTintaRojaSecondSection, sliderTintaRojaThirdSection } from "../helpers/sliderTintaRoja";
import { casaTintaRoja } from "../helpers/lugaresInfo";

export const CasaPage = () => {
  return (
    <>
      <Header key={ casaTintaRoja } {...casaTintaRoja}/>
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
                lavadero con plancha y mesa, Lavatorio y Lavarropas automatico.{" "}
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

      <Footer />
    </>
  );
};

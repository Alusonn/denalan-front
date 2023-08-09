import ReactImageGallery from "react-image-gallery";
import { FirstSection } from "../components/FirstSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { sliderTintaRojaMain } from "../helpers/sliderTintaRojaMain";
import "../styles/components/CasaPage.css";
import { sliderTintaRojaFirstSection } from "../helpers/sliderTintaRojaFirstSection";
import { sliderTintaRojaSecondSection } from "../helpers/sliderTintaRojaSecondSection";

export const CasaPage = () => {
  return (
    <>
      <Header />
      {/* First Section */}
      <div className="container text-center">
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-10">
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
            <div className="d-inline-block texto-desc">
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
          <div className="col-10">
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
            <div className="d-inline-block texto-desc">
              <p>
                En planta alta tenemos 1 habitacion con 1 baño en suite y balcón
                con vista al jardin la misma esta integrada por 1 cama litera (2
                pers.), <br /> 1 cama matrimonial (2 pers.), <br />  placard, 1 TV 32" con
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

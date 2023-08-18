import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { departamento } from "../helpers/lugaresInfo";
import '../styles/components/CasaPage.css'
import ReactImageGallery from "react-image-gallery";
import { sliderTintaRojaFirstSection } from "../helpers/sliderTintaRoja";

export const DeptoPage = () => {

  return (
    <>
      <Header key={ departamento } { ...departamento } />
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
      <Footer />
    </>
  );
};

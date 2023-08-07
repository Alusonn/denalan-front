import logoNegro from "../data/SodaPDF-converted-F99D55AE-D025-46D8-8BFE-5F203C5846D6-removebg-preview.png";
import "../styles/components/Header.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";
import { sliderTintaRojaMain } from "../data/imagesData";
import ReactImageGallery from "react-image-gallery";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Casa Tinta Roja 1</h1>
            </div>

            {/* Ubicacion del logo de la izquierda que esta en vertical */}

            <div className="col-12 col-sm-2">
              <Link to={"/"}>
                <img src={logoNegro} alt="" className="img-vertical w-100" />
              </Link>
            </div>
            <div className="col-12 col-sm-8 my-2">
              {/* Galera desde NPM en react */}

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
                <AiOutlineWhatsApp className="mb-2" /> +54 9 2267520604
              </h4>
            </div>
            <div className="col-12 col-sm-2">
              <div className="octagono my-1 mx-1 d-inline-block">
                <BsPeople />
              </div>
              <div className="octagono my-1 mx-1 d-inline-block"></div>
              <div className="octagono my-1 mx-1 d-inline-block"></div>
              <div className="octagono my-1 mx-1 d-inline-block"></div>
            </div>
            <div className="col ">
              <p className="d-inline-block texto-desc">
                Es una casa caracterizada por la *exclusividad* familiar, con
                capacidad de hasta 10 personas. Ubicada en zona sur de la Ciudad
                de Villa Gesell, zona muy tranquila ideal para descansar en
                familia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

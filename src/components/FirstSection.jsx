import "react-image-gallery/styles/css/image-gallery.css";
import logoNegro from "../data/SodaPDF-converted-F99D55AE-D025-46D8-8BFE-5F203C5846D6-removebg-preview.png";
import ReactImageGallery from "react-image-gallery";
import { sliderTintaRojaMain } from "../helpers/sliderTintaRojaMain";
import { Link } from "react-router-dom";

export const FirstSection = ({ sliderTintaRoja }) => {


  return (
    <div className="container text-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-10">
          <ReactImageGallery
            items={sliderTintaRojaMain}
            lazyLoad={false}
            showPlayButton={false}
            autoPlay={true}
            slideDuration={500}
            slideInterval={6000}
            showFullscreenButton={false}
          />
        </div>
        <div className="col-2 ">
          <Link to={"/"}>
            <img src={logoNegro} alt="" className="img-vertical w-100" />
          </Link>
        </div>
        <div className="col-12">
          <div className="d-inline-block texto-desc">
            <p>sdadasda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import ReactImageGallery from "react-image-gallery";
import { sliderTintaRojaMain } from "../data/imagesData";
import 'react-image-gallery/styles/css/image-gallery.css'


export const CarouselV = () => {
  return <ReactImageGallery items={sliderTintaRojaMain} />;
};

import portadaPrincipal from "../data/foto2.webp";
import patioTrasero from "../data/foto24.webp";
import terraza1 from "../data/foto22.webp";
import terraza2 from "../data/foto23.webp";

export const Carousel = () => {
  return (
    
    <div className="carousel slide mb-3" id="carouselIndicators">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={portadaPrincipal} alt="" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={patioTrasero} alt="" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={terraza1} alt="" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={terraza2} alt="" className="d-block w-100" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

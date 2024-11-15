"use client"

import { OfferImage } from './OfferImage';
import { useEffect } from 'react';
import "@/app/styles/homepage/mainoffers/mainoffers.scss";

const MainOffers = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="bd-example  sanu">
      <div 
        id="carouselExampleCaptions"
        className="carousel slide" 
        data-bs-ride="carousel">

        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
        
          <div className="carousel-item active">
            <OfferImage/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item">
            <OfferImage/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item">
            <OfferImage/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
        
      </div>
    </div>
  );
}

export default MainOffers;
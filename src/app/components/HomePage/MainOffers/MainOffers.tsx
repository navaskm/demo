"use client"

import { useEffect} from 'react';
import "@/app/styles/homepage/mainoffers/mainoffers.scss";

const MainOffers = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="bd-example">
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
            {/* image */}
            <div className="offer-image">

              <img className="image-one" src="/shoes-offer-image-1.jpg" alt="offer" />
              <img className="image-two" src="/shoes-offer-image-2.jpg" alt="offer" />
              <img className="image-three" src="/shoes-offer-image-3.jpg" alt="offer" />

            </div>

              <div className="carousel-caption d-none d-md-block">
              </div>
          </div>

          <div className="carousel-item">
            {/* image */}
            <div className="offer-image">

               <img className="image-one" src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/geetanjali/mobile-phones-diwali-page/big-banner/desk/MCLP_Row3_1_BigBanner_Desk_OnePlus10Pro_PDP_B2B.jpg" alt="" />

               <img className="image-two" src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/geetanjali/mobile-phones-diwali-page/big-banner/desk/MCLP_Row3_1_BigBanner_Desk_OnePlus10Pro_PDP_B2B.jpg" alt="" />

              <img className="image-three" src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/geetanjali/mobile-phones-diwali-page/big-banner/desk/MCLP_Row3_1_BigBanner_Desk_OnePlus10Pro_PDP_B2B.jpg" alt="" />

            </div>
              
              
            {/* </div> */}
            
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item">
            {/* image */}
            <div className="offer-image">

              <img className="image-one" src="https://img.freepik.com/free-psd/eco-bag-veggies-shopping-banner-template_23-2148439629.jpg" alt="" />

              <img className="image-two" src='https://1ststep.pk/cdn/shop/collections/2000px_600px_Bags.webp?v=1705063818' />

              <img className="image-three" src='https://1ststep.pk/cdn/shop/collections/2000px_600px_Bags.webp?v=1705063818' />
            </div>
            
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>

        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon abc" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
        
      </div>
    </div>
  );
}

export default MainOffers;
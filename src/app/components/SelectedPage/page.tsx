"use client";
import NavBar from "../HomePage/navbar/NavBar";
import '@/app/styles/selectdpage/selectpage.scss';
import { useSearchParams } from "next/navigation";

const SelectItemPage = () => {

  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const priceCents = searchParams.get("priceCents");
  const image = searchParams.get("image");
  const rating = searchParams.get("rating");
  const type = searchParams.get("type");
  const id = searchParams.get("id");

  return (
    <div>
      <NavBar/>

      <div className="container-select-item col-6">

        <div 
          className="different-images col-2 d-none d-sm-block">
        </div>

        <div className="col-12 col-sm-10 container-of-image-cart-another-image">

          <div className="image-display">
            {/* <img src="/OfferImage/Bags/bag-offer-image-1.jpg" alt="" /> */}
            <img src={image} alt={name} />
          </div>

          <div>
            <button>Add to Cart</button>
          </div>

          <div>
            <h3>Hello</h3>
          </div>

        </div>

      </div>

    </div>
  )
}

export default SelectItemPage
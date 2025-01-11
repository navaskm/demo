"use client"

import SizeSelect from "./ImageSize/SizeSelect";
import AddToCartBtn from "./AddToCartBtn/AddToCartBtn";
import { useSearchParams } from "next/navigation";
import { Provider } from "react-redux";
import store from '../../Redux/store';

// type Products = {
//   name: string,
//   image: string,
//   size:string | string[],
//   value:string,
// }
// {selectedImage}:{selectedImage:Products}

const ImageDisplay = () => {

  const searchParams = useSearchParams();
  const image:string|null = searchParams.get("image");
  const size:string[]|null = searchParams.getAll("size");
  const name:string|null = searchParams.get("name");
  const priceCents:string|null = searchParams.get("priceCents");
  const id:string|null = searchParams.get("id");

  return (
    <div className="image-select-display-item col-12 col-md-6">
    
      {/* create size list of product */}
      {
        size? (
        <div className="container-product-size col-2">
          <h5>Select Size</h5>
          <div className="container-size-list">
            {
              size.map((size:string, index:number) => {
                return (
                  <SizeSelect key={index} size={size} index={index}/>
                )
              })
            }
          </div>
        </div>
        ):(
          null
        )
      }
    
      {/* create image,quantity, add to cart of product */}
      <div className="col-10 container-of-image-cart-another-image">

        {/* create image of product */}
        <div className="image-display">
          {/* <img src={decodeURIComponent(selectedImage.image)} alt={selectedImage.name} /> */}
          <img src={decodeURIComponent(image)} alt='image' />
        </div>

        {/* create quantity and add to cart of product */}
        <div className='container-item-quantity-cart-button'>

          {/* create add to cart button of product */}
          <Provider store={store}>
            <AddToCartBtn name={name} image={image} price={priceCents} size={size} id={id}/>
          </Provider>

        </div>

      </div>

    </div>
  )
}

export default ImageDisplay
"use client"

import { useSearchParams } from "next/navigation";
import { lazy,Suspense } from "react";
import { Provider } from "react-redux";
import store from '../../Redux/store';

const AddToCartBtn = lazy(()=> import('./AddToCartBtn/AddToCartBtn'));

const ImageDisplay = () => {

  const searchParams = useSearchParams();
  const image:string|null = searchParams.get("image");
  const size:string[]|null = searchParams.getAll("size");
  const name:string|null = searchParams.get("name");
  const priceCents:string|null = searchParams.get("priceCents");
  const id:string|null = searchParams.get("id");

  // image size select code
  const selectSize = (isWhite: string) => {
    const elements = document.querySelectorAll('.is-black');
    elements.forEach(element => element.classList.remove('is-black'));
  
    const selectedElement = document.querySelector(isWhite);
    selectedElement?.classList.add('is-black');
  };

  return (
    <div className="image-select-display-item col-12 col-md-6">
    
      {/* create size list of product */}
      {
        size && size.length >0 && (
        <div className="container-product-size col-2">
          <h5>Select Size</h5>
          <div className="container-size-list">
            {
              size.map((size:string, index:number) => {

                return (
                  <p 
                  key={index}
                  className={`is-white size-${size}`} 
                  onClick={()=> selectSize(`.size-${size}`)}
                >{size}</p>
                )
              })
            }
          </div>
        </div>
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
          <Suspense fallback={<p>loading....</p>}>
            <Provider store={store}>
              <AddToCartBtn name={name} image={image} price={priceCents} size={size} id={id}/>
            </Provider> 
          </Suspense>

        </div>

      </div>

    </div>
  )
}

export default ImageDisplay
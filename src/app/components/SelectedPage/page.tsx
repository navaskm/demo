//"use client";

import { TiShoppingCart } from "react-icons/ti";
import NavBar from "../HomePage/navbar/NavBar";
import '@/app/styles/selectdpage/selectpage.scss';

import SmallProducts from "../HomePage/SmallProducts/SmallProducts";

type Products = {
  name: string,
  title:string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
}

const SelectItemPage = ({searchParams}:{searchParams:Products}) => {

  let defaultSize = true;

  // create size of cloths
  let sizeOfCloths = false;
  if (searchParams?.type === 'mens-clothes' || searchParams.type === 'women-clothes') {
    sizeOfCloths = true;
    defaultSize = false;
  }

  // create size of shoes
  let sizeOfShoes = false;
  if (searchParams?.type === 'shoes') {
    sizeOfShoes = true;
    defaultSize = false;
  }

  // create size of shoes
  let sizeOfSunglass = false;
  if (searchParams?.type === 'sunglass') {
    sizeOfSunglass = true;
    defaultSize = false;
  }


  // const selectSize = () => {
  //   console.log('hello');
  // }

  return (
      <>
        <NavBar/>

        <div className="image-features-container">

          {/* image size,image, add to cart, quantity of product display */}
          <div className="image-select-display-item col-12 col-md-6">

              {/* create size list of product */}
            <div className="container-product-size col-2">
              <h5>Select Size</h5>
              <div className="container-size-list">

                {/* crete size of cloths */}
                {
                  sizeOfCloths && (
                    <>
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                      <p>XL</p>
                      <p>XXL</p>
                    </>
                  )
                }

                {/* crete size of shoes */}
                {
                  sizeOfShoes && (
                    <>
                      <p>IND-5</p>
                      <p>IND-6</p>
                      <p>IND-7</p>
                      <p>IND-8</p>
                      <p>IND-9</p>
                    </>
                  )
                }

                {/* crete size of sunglass */}
                {
                  sizeOfSunglass && (
                    <>
                      <p>XS</p>
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </>
                  )
                }

                {/* crete default size */}
                {
                  defaultSize && (
                    <>
                      <p>Free Size</p>
                    </>
                  )
                }

              </div>
            </div>

              {/* create image,quantity, add to cart of product */}
            <div className="col-10 container-of-image-cart-another-image">

              {/* create image of product */}
              <div className="image-display">
                <img src={decodeURIComponent(searchParams.image)} alt={decodeURIComponent(searchParams.name)} />
              </div>

              {/* create quantity and add to cart of product */}
              <div className='container-item-quantity-cart-button'>

                  {/* create quantity list of product */}
                <div className="container-of-quantity">
                  <label htmlFor="">Quantity :</label>
                  
                  <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

              {/* create add to cart button of product */}
                <button title="add to cart">
                  <span>
                    <TiShoppingCart /> 
                  </span>
                  Add to Cart
                </button>
              </div>

            </div>

          </div>


          {/* features display */}
          <div className="feature-display  col-12 col-md-6">

            <div>
              <h2>{decodeURIComponent(searchParams.name)}</h2>
              <b><span>₹</span>{searchParams.priceCents}</b>
              <p>{searchParams.rating}&#9733;</p>
              <p>free delivery</p>
            </div>

            <div>
              <h2>Product details</h2>
              <p>Name: {decodeURIComponent(searchParams.name)}</p>
              <p>Rating: {searchParams.rating}</p>
            </div>

            <div>
              <h3>check your delivery date</h3>
            </div>

            <div>
              <h2>Product Rating & Reviews</h2>
              <div className="d-flex">
                <div><h2>hello</h2></div>

                <div>
                  <p>very good</p>
                  <p>good</p>
                  <p>poor</p>
                </div>

              </div>
            </div>
            
          </div>

          <SmallProducts/>

        </div>

      </>
  )
}

export default SelectItemPage
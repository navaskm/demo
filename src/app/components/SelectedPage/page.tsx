"use client";

import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineExclamationCircle } from "react-icons/ai";

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
  company: string,
  madein: string,
  Feature: string,
  size:string,
}

const SelectItemPage = ({searchParams}:{searchParams:Products}) => {

  console.log(searchParams.size);

  let defaultSize = true;

  // create size of cloths
  let sizeOfCloths = false;
  if ( searchParams.type === 'mens-clothes' || searchParams.type === 'women-clothes') {
    sizeOfCloths = true;
    defaultSize = false;
  }

  // create size of shoes
  let sizeOfShoes = false;
  if (searchParams.type === 'shoes') {
    sizeOfShoes = true;
    defaultSize = false;
  }

  // create size of sunglass
  let sizeOfSunglass = false;
  if (searchParams.type === 'sunglass') {
    sizeOfSunglass = true;
    defaultSize = false;
  }


  const selectSize = (isWhite: string) => {
    const elements = document.querySelectorAll('.is-black');
    elements.forEach(element => element.classList.remove('is-black'));

    const selectedElement = document.querySelector(isWhite);
    selectedElement.classList.add('is-black');
  };

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
                {
                  searchParams.size?  (
                        searchParams.size.map((size:string) => {
                          return (
                            <p 
                              className={`is-white size-${size}`} 
                              onClick={()=> selectSize(`.size-${size}`)}>
                            {size}</p>
                          )
                        })
                  ):(
                    <p>Free Size</p>
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

            <div className="product-basic">
              <h2>{decodeURIComponent(searchParams.name)}</h2>
              <h3><span>₹</span>{searchParams.priceCents} <b><AiOutlineExclamationCircle /></b></h3>
              <h5>{searchParams.rating}&#9733;</h5> <h6></h6>
              <p>free delivery</p>
            </div>

            <div className="product-details">
              <h2>Product details</h2>
              <p>Made in : <span>{decodeURIComponent(searchParams.madein)}</span></p>
              <p>Company: <span>{decodeURIComponent(searchParams.company)}</span></p>
              <p>Special Feature : <span>{decodeURIComponent(searchParams.Feature)}</span></p>
            </div>

            <div className="product-delivery-date">
              <h2>Check Your Delivery Date</h2>
              <p>Free : <span>Within 7 days, the product will reach your home.</span></p>

              <p>Normal : <span>If you pay a $3 shipping cost, the product will reach your home within 5 days.</span></p>
              
              <p>Urgent : <span>If you pay a $5 shipping cost, the product will reach your home within 3 days.</span></p>

            </div>

            <div className="product-rating-reviews">
              <h2>Product Rating & Reviews</h2>

              <div>
                <p>Good</p>
                <b>
                  <span style={{width: "65%", backgroundColor:"#6AFF6A"}}></span>
                </b>
              </div>

              <div>
                <p>Average</p>
                <b>
                  <span style={{width: "50%",backgroundColor:"#FCFC7F"}}></span>
                </b>
              </div>

              <div>
                <p>Poor</p>
                <b>
                  <span style={{width: "20%",backgroundColor:"#FA3C3AA9"}}></span>
                </b>
              </div>

            </div>
            
          </div>

          {/* <SmallProducts/> */}

        </div>

      </>
  )
}

export default SelectItemPage
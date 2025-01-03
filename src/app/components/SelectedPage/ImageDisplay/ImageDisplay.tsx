import { TiShoppingCart } from "react-icons/ti";
import SizeSelect from "./ImageSize/SizeSelect";

type Products = {
  name: string,
  image: string,
  size:string | string[],
  value:string,
}

const ImageDisplay = ({selectedImage}:{selectedImage:Products}) => {

  return (
    <div className="image-select-display-item col-12 col-md-6">
    
      {/* create size list of product */}
      {
        selectedImage.size? (
        <div className="container-product-size col-2">
          <h5>Select Size</h5>
          <div className="container-size-list">
            {
              selectedImage.size.map((size:string, index:number) => {
                return (
                  <SizeSelect key={index} size={size} />
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
          <img src={decodeURIComponent(selectedImage.image)} alt={selectedImage.name} />
        </div>

        {/* create quantity and add to cart of product */}
        <div className='container-item-quantity-cart-button'>

          {/* create quantity list of product */}
          <div className="container-of-quantity">
            <label htmlFor="">Quantity :</label>

            <select id="quantity" name="quantity">
              {
                Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))
              }
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
  )
}

export default ImageDisplay
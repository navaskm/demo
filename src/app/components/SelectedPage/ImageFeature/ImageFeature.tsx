import { AiOutlineExclamationCircle } from "react-icons/ai";

type Products = {
  name: string,
  rating: string,
  priceCents:string,
  company: string,
  madein: string,
  Feature: string,
}

const ImageFeature = ({selectedImage}:{selectedImage:Products}) => {
  return (
    <div className="feature-display  col-12 col-md-6">

      <div className="product-basic">
        <h2>{decodeURIComponent(selectedImage.name)}</h2>
        <h3><span>₹</span>{selectedImage.priceCents} <b><AiOutlineExclamationCircle /></b></h3>
        <h5>{selectedImage.rating}&#9733;</h5> <h6></h6>
        <p>free delivery</p>
      </div>

      <div className="product-details">
        <h2>Product details</h2>
        <p>Made in : <span>{decodeURIComponent(selectedImage.madein)}</span></p>
        <p>Company: <span>{decodeURIComponent(selectedImage.company)}</span></p>
        <p>Special Feature : <span>{decodeURIComponent(selectedImage.Feature)}</span></p>
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
  )
}

export default ImageFeature
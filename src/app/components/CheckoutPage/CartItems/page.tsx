import { useSelector } from "react-redux"

type Products = {
  id: string,
  name: string,
  image: string,
  price: number,
  quantity: number,
  size: string,
}
const CartItems = () => {

  const checkoutItems = useSelector((state:any)=> state.cartItems.items);

  return (
    <div className='col-12 col-lg-8 cart-items-container'>
      <h1>Review your order</h1>
      {
        checkoutItems.map((item:Products) => {
          return (
            <div key={item.id} className='cart-each-items'>

              <h5>Delivery date: <span>Saturday, January 18</span></h5>

              <div className="cart-details-container">

                <div className="col-12 col-md-6 cart-details-display">
                  <img src={decodeURIComponent(item.image)} alt={item.name} style={{width:'100px'}}/>
                  <div>
                    <h5>{decodeURIComponent(item.name)}</h5>
                    <b className="price-display">Price: <span>${item.price}</span></b>
                    <p>Quantity: <span>{item.quantity}</span></p>
                    {
                      item.size && item.size.length>0 && <p>Size: <span>{item.size}</span></p>
                    }
                  </div>
                </div>

                <div className="col-12 col-md-6 delivery-date-option-container">
                  <h5>Choose a delivery option:</h5>
                    <input type="radio" name={`date-select-${item.id}`}/><label>Saturday, January 18FREE Shipping</label><br/>
                    <input type="radio" name={`date-select-${item.id}`}/><label>Saturday, January 18FREE Shipping</label><br/>
                    <input type="radio" name={`date-select-${item.id}`}/><label>Saturday, January 18FREE Shipping</label>
                </div>

              </div>
              
            </div>
          )
        })
      }
    </div>
  )
}

export default CartItems
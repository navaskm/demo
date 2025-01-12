import { useSelector } from "react-redux"

const PaymentPage = () => {

  const checkoutItems = useSelector((state:any)=> state.cart.cartBase);

  return (
    <div className='col-lg-4 payment-container'>
      <h4>Order Summary</h4>
      <div className='order-summary'>

        <div className='order-names'>
          <p>Items({checkoutItems}):</p>
          <p>Shipping & handling:</p>
          <p>Total before tax:</p>
        </div>

        <div className='order-prices'>
          <p>$60.79</p>
          <p>$60.79</p>
          <p>$60.79</p>
        </div>

      </div>
    </div>
  )
}

export default PaymentPage
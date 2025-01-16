import { useSelector } from "react-redux"

const PaymentPage = () => {

  const checkoutItems = useSelector((state:any)=> state.cart.cartBase);
  const conformItems = useSelector((state:any)=> state.cartItems.items);

  console.log(conformItems);

  // if (Array.isArray(conformItems)) {
  //   // get price of product
  //   const prices = conformItems.map((item) => Number(item.price));
  //   //console.log(prices);

  //   // get quantity of product
  //   const quantities = conformItems.map((item) => Number(item.quantity));
  //   //console.log(quantities);

  //   const totalPrice = prices.reduce((sum, price) => sum + price, 0);

  //   //const totalPrice = prices.reduce((sum, price) => sum + price, 0);
  //   //console.log(totalPrice);
  // } 

  let productPriceCents = 0;

  conformItems.forEach((cartItem) => {
    //Cost of product
    productPriceCents += cartItem.quantity * cartItem.price;
  });

  return (
    <div className='col-12 col-lg-4 payment-container'>
      <h4>Order Summary</h4>
      <div className='order-summary'>

        <div className="product-shipping-price-container">
          <div className='order-names'>
            <p>Items({checkoutItems}):</p>
            <p>Shipping & handling:</p>
          </div>
          <div className='order-prices'>
            <p>{productPriceCents}</p>
            <p>$60.79</p>
          </div>
        </div>

        <div className="tax-price-container">
          <div className="order-texes">
            <p>Total before tax:</p>
            <p>Estimated tax (10%):</p>
          </div>
          <div className="order-tax-price">
            <p>89</p>
            <p>34</p>
          </div>
        </div>

        <div className="total-amount-container">
          <p>Total Amount</p>
          <p>34</p>
        </div>

        <button>Place your order</button>

      </div>
    </div>
  )
}

export default PaymentPage
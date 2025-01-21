import { useSelector } from "react-redux";
import React from "react";

const PaymentPage = () => {

  const checkoutItems = useSelector((state:any)=> state.cart.cartBase);
  const conformItems = useSelector((state:any)=> state.cartItems.items);

  // get shipping cost
  const shippingCost = useSelector((state:any) => state.deliveryDate.shippingCost);

  // get total product price
  const productPriceCents = React.useMemo(() => {
    return conformItems.reduce((total: number, cartItem: any) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
  }, [conformItems]);

  // get total price before tax
  const totalBeforeTax = shippingCost + productPriceCents;

  // get tax amount in cents
  const taxCents = (totalBeforeTax / 100) * 0.1;

    // Function to format prices
    function fixed(price: number) {
      return price.toFixed(2);
    }

  const totalAmount = taxCents + totalBeforeTax;

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
            <p>₹{productPriceCents}</p>
            <p>₹{shippingCost}</p>
          </div>
        </div>

        <div className="tax-price-container">
          <div className="order-texes">
            <p>Total before tax:</p>
            <p>Estimated tax (10%):</p>
          </div>
          <div className="order-tax-price">
            <p>{totalBeforeTax}</p>
            <p>{fixed(taxCents)}</p>
          </div>
        </div>

        <div className="total-amount-container">
          <p>Total Amount</p>
          <p>{fixed(totalAmount)}</p>
        </div>

        <button>Place your order</button>

      </div>
    </div>
  )
}

export default PaymentPage
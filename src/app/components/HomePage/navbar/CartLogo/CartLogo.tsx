import { useSelector } from "react-redux";
import Link from "next/link";

const CartLogo = () => {

  const numberOfItemsQuantity = useSelector(state => state.cart.
    cartBase
  )

  return (
    <Link 
    href='/components/CheckoutPage'
    className="cart-logo">
      <h6>{numberOfItemsQuantity}</h6>
      <img
        src='/Logo/cart-logo.png'
        alt="Logo"
      />
    </Link>
  )
}

export default CartLogo;
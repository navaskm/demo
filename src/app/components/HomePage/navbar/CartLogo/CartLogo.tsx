import { useSelector } from "react-redux";

const CartLogo = () => {

  const numberOfItemsQuantity = useSelector(state => state.cart.
    cartBase
  )

  return (
    <div className="cart-logo">
      <h6>{numberOfItemsQuantity}</h6>
      <img
        src='/Logo/cart-logo.png'
        alt="Logo"
      />
    </div>
  )
}

export default CartLogo;
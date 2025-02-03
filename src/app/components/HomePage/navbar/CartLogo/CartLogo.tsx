import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

import { hydrate } from "./cartLogoSlice";

type Quantity = {
  cart:{
    cartBase:number;
  }
}

const CartLogo = () => {

  const dispatch = useDispatch();
  const numberOfItemsQuantity = useSelector((state:Quantity) => state.cart.
    cartBase
  )

  // add local storage in to the store
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartBase = JSON.parse(localStorage.getItem("cartBase") || '0');
      dispatch(hydrate({ cartBase }));
    }
  }, [dispatch]);

  return (
    <Link 
    href='/components/CheckoutPage'
    className="cart-logo">
      <h6>{numberOfItemsQuantity}</h6>
      <Image
        src='/Logo/cart-logo.png'
        alt="Logo"
        fill
      />
    </Link>
  )
}

export default CartLogo;
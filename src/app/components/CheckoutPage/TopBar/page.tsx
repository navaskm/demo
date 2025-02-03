"use client";

import Link from "next/link"
import { useSelector } from "react-redux"

type TopBarProps = {
  order?: string,
}

type QuantityType = {
  cart: {
    cartBase: number;
  }
}

type Products = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

type CartItemType = {
  selectedSize?: string;
  cartItems: {
    items: Products[];
  }
}

export default function TopBar ({order}:TopBarProps)  {

  const checkoutItems = useSelector((state:QuantityType)=> state.cart.cartBase);
  const carItems = useSelector((state: CartItemType) => state.cartItems.items);

  return (
    <div className="top-bar">
      <Link href='/'>
         <img src="/Logo/app-logo.png" alt="back"/>
      </Link>

      {
        order?(
          <h2>
            Your Orders
          </h2>
        ): carItems.length !== 0 ? (
          <h2>
            Check Out <span>{checkoutItems}</span> Items
          </h2>
        ):(
          <h2>
            Your cart is empty!
          </h2>
        )
      }

    </div>
  )
}
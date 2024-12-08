"use client";

import "@/app/styles/homepage/navbar/navbar.scss";

const CartLogo = () => {
  return (
    <div className="logo">
      <h6>0</h6>
      <img 
        src='/Logo/cart-logo.png'
        alt="Logo"
      />
    </div>
  )
}

export default CartLogo;
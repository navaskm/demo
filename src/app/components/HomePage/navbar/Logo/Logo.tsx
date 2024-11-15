"use client";

import Image from "next/image"
import "@/app/styles/homepage/navbar/navbar.scss";

export const Logo = () => {
  return (
    <div className="logo">
      <Image 
        src='/cart.png'
        alt="Logo"
        width={50}
        height={40}
      />
    </div>
  )
}

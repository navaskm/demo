"use client";

import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "@/app/components/HomePage/navbar/CartLogo/cartLogoSlice";
import { addItem } from "./cartSlice";

const AddToCartBtn = ({name,image,price,id,size,selectedSize}) => {

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const AddToCart = ()=>{

    // user not use size then this work. after user select a size
    if(size.length !== 0 &&  selectedSize === ''){
      alert('Choose a size');
      const AddBorder = document.querySelector('.container-product-size');
      AddBorder?.classList.add('add-border');
      return;
    }

    setIsAdded(true);

    dispatch(addToCart());
    dispatch(addItem({name,image,price,id,selectedSize}))

    setTimeout(()=>{
      setIsAdded(false);
    }, 2000);
  }

  return (
    <>
    {
      isAdded&&<p>Added to Cart</p>
    }
      <button 
      onClick={AddToCart}
      className="add-cart-button"
      title="add to cart">
        <span>
          <TiShoppingCart /> 
        </span>
        Add to Cart
      </button>
    </>
  )
}

export default AddToCartBtn
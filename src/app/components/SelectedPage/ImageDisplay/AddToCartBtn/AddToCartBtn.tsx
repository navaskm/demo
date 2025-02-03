"use client";

import { TiShoppingCart } from "react-icons/ti";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "@/app/components/HomePage/navbar/CartLogo/cartLogoSlice";
import { addItem } from "./cartSlice";

type Product = {
  name:string|null,
  image: string,
  price: string|null,
  id: string|null,
  size: string[],
  selectedSize: string,
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

const AddToCartBtn = ({name,image,price,id,size,selectedSize}:Product) => {

  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();
  const checkoutItems = useSelector((state:CartItemType) => state.cartItems.items);

  const AddToCart = ()=>{

    // user not use size then this work. after user select a size
    if(size.length > 2 &&  selectedSize === ''){
      alert('Choose a size');
      const AddBorder = document.querySelector('.container-product-size');
      AddBorder?.classList.add('add-border');
      return;
    }

    // Check if the product is already in the cart
    const existingItem = checkoutItems.find(
      (item:Products) => item.id === id && item.selectedSize === selectedSize
    );

    // Prevent adding more than 10 of the same product
    if (existingItem && existingItem.quantity >= 10) {
      alert("You cannot add more than 10 of the same product.");
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
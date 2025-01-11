"use client"
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/components/HomePage/navbar/CartLogo/cartLogoSlice";

type Items = {
  name: string;
  price: number;
  image: string;
  size: string[];
  id: string;
}

export let items = [{
  name:null,
  image:null,
  price: null,
  size: null,
}]

export let cart: {
  image: string | null;
  name: string | null;
  price: number | null;
  size: string[] | null;
  id: string | null;
  quantity: number;
}[] = [];

const AddToCartBtn = (props:Items) => {

  const dispatch = useDispatch();

  const clicked = ()=>{

    dispatch(addToCart())

    let matchingItem = cart.find(item=> item.id === props.id);

    if(matchingItem){
      matchingItem.quantity += 1;
    }else{
      cart.push({
        image: props.image,
        name: props.name,
        price: props.price,
        size: props.size,
        id: props.id,
        quantity: 1,
      });
    }

    console.log(cart);

  }

  return (
    <button 
    onClick={clicked}
    className="add-cart-button"
    title="add to cart">
      <span>
        <TiShoppingCart /> 
      </span>
      Add to Cart
    </button>
  )
}

export default AddToCartBtn
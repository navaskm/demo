import Link from "next/link"
import { useSelector } from "react-redux"
import Image from "next/image"

type Order = {
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

const TopBarOfCartPage = ({order}:Order) => {

  const checkoutItems = useSelector((state:QuantityType)=> state.cart.cartBase);
  const carItems = useSelector((state: CartItemType) => state.cartItems.items);

  return (
    <div className="top-bar">
      <Link href='/'>
         <Image src="/Logo/app-logo.png" alt="back" width={200} height={90}/>
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

export default TopBarOfCartPage
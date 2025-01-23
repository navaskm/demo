import Link from "next/link"
import { useSelector } from "react-redux"

const TopBarOfCartPage = () => {

  const checkoutItems = useSelector((state:any)=> state.cart.cartBase);
  const carItems = useSelector((state: any) => state.cartItems.items);

  return (
    <div className="top-bar">
      <Link href='/'>
         <img src="/Logo/app-logo.png"/>
      </Link>

      {
        carItems.length !== 0 ? (
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

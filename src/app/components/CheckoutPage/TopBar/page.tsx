import Link from "next/link"
import { useSelector } from "react-redux"

const TopBarOfCartPage = () => {

  const checkoutItems = useSelector((state:any)=> state.cart.cartBase);

  return (
    <div className="top-bar">
      <Link href='/'>
         <img src="/Logo/app-logo.png"/>
      </Link>
      <h2>
        Check Out <span>{checkoutItems}</span> Items
      </h2>
    </div>
  )
}

export default TopBarOfCartPage

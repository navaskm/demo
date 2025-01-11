import CartItems from "./CartItems/page";
import PaymentPage from "./PaymentSection/page";
import TopBarOfCartPage from "./TopBar/page"
import "@/app/styles/cartpage/cartpage.scss";

const CartPage = () => {
  return (
    <>
      <TopBarOfCartPage/>
      <div style={{display:'flex'}}>
        <CartItems/>
        <PaymentPage/>
      </div>
    </>
  )
}

export default CartPage
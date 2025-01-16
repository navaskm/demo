"use client";

import { lazy,Suspense } from "react";
import { useEffect,useState } from "react";
import { Provider } from "react-redux";
import store from "../Redux/store";

const CartItems = lazy(()=> import('./CartItems/page'));
const PaymentPage = lazy(()=> import('./PaymentSection/page'));
const TopBarOfCartPage = lazy(()=> import('./TopBar/page'));
import "@/app/styles/checkoutpage/checkout.scss";

const CartPage = () => {

  const [screenWidth,setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update screenWidth only after the component is mounted on the client
    const handleResize = () => setScreenWidth(window.innerWidth);

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <Provider store={store}>
            <TopBarOfCartPage/>
          </Provider>
      </Suspense>

      {
        screenWidth < 991? (
          <div className="cart-items-payment-section-container" style={{display:'flex'}}>
            <Suspense fallback={<div>Loading...</div>}>
              <Provider store={store}>
                <PaymentPage/>
                <CartItems/>
              </Provider>
            </Suspense>
          </div>
        ):(
          <div className="cart-items-payment-section-container" style={{display:'flex'}}>
            <Suspense fallback={<div>Loading...</div>}>
              <Provider store={store}>
                <CartItems/>
                <PaymentPage/>
              </Provider>
            </Suspense>
          </div>
        )
      }
    </>
  )
}

export default CartPage
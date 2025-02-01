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

  const [screenWidth, setScreenWidth] = useState<number | null>(null);

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
    <Provider store={store}>

      <title>Check Your Items</title>

      <Suspense fallback={<p>loading...</p>}>
        <TopBarOfCartPage/>
      </Suspense>

      {screenWidth !== null && (
      <div className="cart-items-payment-section-container" style={{ display: 'flex' }}>
        <Suspense fallback={<div>Loading...</div>}>
          {screenWidth < 991 ? (
            <>
              <PaymentPage />
              <CartItems />
            </>
          ) : (
            <>
              <CartItems />
              <PaymentPage />
            </>
          )}
        </Suspense>
      </div>
    )}
    </Provider>
  )
}

export default CartPage
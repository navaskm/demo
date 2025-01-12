"use client";

import { lazy,Suspense } from "react";
import { Provider } from "react-redux";
import store from "../Redux/store";

const CartItems = lazy(()=> import('./CartItems/page'));
const PaymentPage = lazy(()=> import('./PaymentSection/page'));
const TopBarOfCartPage = lazy(()=> import('./TopBar/page'));
import "@/app/styles/checkoutpage/checkout.scss";

const CartPage = () => {

  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <Provider store={store}>
            <TopBarOfCartPage/>
          </Provider>
      </Suspense>

      <div style={{display:'flex'}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <CartItems/>
            <PaymentPage/>
          </Provider>
        </Suspense>
      </div>
    </>
  )
}

export default CartPage
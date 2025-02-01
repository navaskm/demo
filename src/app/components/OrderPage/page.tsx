"use client";

import { lazy,Suspense } from "react";
import { Rings } from 'react-loading-icons';
import { Provider } from "react-redux";
import store from "../Redux/store";
const OrderItems = lazy(()=>import("./OrderItems/page"));
import '@/app/styles/orderpage/orderpage.scss';

const OrderPage = () => {
  return (
    <div className="container-order-page">

      <title>Your Orders</title>

      <Provider store={store}>
        <Suspense fallback={<Rings />}>
          <OrderItems />
        </Suspense>
      </Provider>
    </div>
  )
}

export default OrderPage;
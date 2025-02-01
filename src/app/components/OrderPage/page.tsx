"use client";

import { Provider } from "react-redux";
import store from "../Redux/store";
import OrderItems from "./OrderItems/page";
import '@/app/styles/orderpage/orderpage.scss';

const OrderPage = () => {
  return (
    <div className="container-order-page">

      <title>Your Orders</title>

      <Provider store={store}>
        <OrderItems />
      </Provider>
    </div>
  )
}

export default OrderPage;
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

type OrderItems = {
  image: string;
  name: string;
  price: string;
  id: string;
  selectedSize: string;
  quantity: number;
  conformDate: string;
}

const OrderItems = () => {

  const [isClient, setIsClient] = useState(false);

    // Ensure rendering happens only on the client
    useEffect(() => {
      setIsClient(true);
    }, []);

  const conformDeliveryDate = useSelector((state: any) => state.deliveryDate.deliveryDate);

  // Render a loading or placeholder state until the client hydrates
  if (!isClient) {
    return null; // Or return a skeleton/loading indicator
  }

  return (
    <div className="order-item-container">
      <h1>Your Orders</h1>

      {
        conformDeliveryDate.map((item:OrderItems) => {
          return (
            <div className="each-item-container" key={item.id}>
              <img src={decodeURIComponent(item.image)} />
              <h2>{decodeURIComponent(item.name)}</h2>
              <p>{item.price}</p>
              <p key={item.id}>Delivery Date: {item.conformDate}</p>
              <p>{item.quantity}</p>
            </div>
          )
        })
      }

    </div>
  )
}

export default OrderItems
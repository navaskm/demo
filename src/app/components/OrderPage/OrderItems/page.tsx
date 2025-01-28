import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

type OrderItems = {
  image: string;
  name: string;
  price: string;
  id: string;
  quantity: number;
  conformDate: string;
  size: string;
}

const OrderItems = () => {

  const [isClient, setIsClient] = useState(false);

    // Ensure rendering happens only on the client
    useEffect(() => {
      setIsClient(true);
    }, []);

  const conformDeliveryDate = useSelector((state: any) => state.deliveryDate.userOrder);

  // Render a loading or placeholder state until the client hydrates
  if (!isClient) {
    return null; // Or return a skeleton/loading indicator
  }

  // Group items by `conformDate`
  const groupedItems = conformDeliveryDate.reduce(
    (acc: Record<string, OrderItems[]>, item: OrderItems) => {

      const date = item.conformDate;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    },
    {}
  );

  const againClickHandle = (itemId:string) =>{
   const element= document.querySelector(`.again-clicked-${itemId}`);

   
   element?.classList.add("add-green")

    if (element) {
      element.innerHTML =  `<strong>&#x2713; Added</strong>`;
    }

    // Set a new timeout to clear the text
    setTimeout(() => {
      element?.classList.remove("add-green");
      element.innerHTML = ` <img src="/ByItAgain/by-it-again.png" alt="" />
                    By it again`
    }, 2000);

  }

  return (
    <div className="order-item-container">

      <div className="title-order-items">
        <h1>Your Orders</h1>
      </div>

      {Object.entries(groupedItems).map(([date, items], groupIndex) => (
        <div
          className="same-date-item-container"
          key={groupIndex}
        >
          <h3>Arriving on: {date}</h3>
          {items.map((item:OrderItems, index:number) => {

            const SelectedSize = item.size?.replace(".size-", "");

            return(
              <div className={`each-item-container ${index == 0?'item-first':null}`} key={index}>

              <img src={item.image && decodeURIComponent(item.image)} alt={item.name} />

              <div className="item-details-display">
                
                <div className="item-details">
                  <h5>{decodeURIComponent(item.name)}</h5>
                  <p>Quantity : <span>{item.quantity}</span></p>
                  {
                    item.size && <p>Size : <span>{SelectedSize}</span></p>
                  }
                  <button 
                    className={`again-clicked-${item.id}`}
                    onClick={()=>againClickHandle(item.id)}
                  >
                    <img src="/ByItAgain/by-it-again.png" alt="" />
                    By it again
                  </button>
                </div>

                <button className="track-button">
                Track Package
                </button>
              </div>

            </div>
            )
          })}
        </div>
      ))}

    </div>
  )
}

export default OrderItems
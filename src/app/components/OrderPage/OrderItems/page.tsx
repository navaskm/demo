"use client"

import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";

import { addToCart } from "../../HomePage/navbar/CartLogo/cartLogoSlice";
import { addItem } from "../../SelectedPage/ImageDisplay/AddToCartBtn/cartSlice";
import { hydrateOrder } from "../../CheckoutPage/CartItems/cartItems";
import TopBarOfCartPage from "../../CheckoutPage/TopBar/TopBar";
import EmptyCart from "../../CheckoutPage/CartItems/EmptyCart/page";

type OrderItems = {
  image: string;
  name: string;
  price: string;
  id: string;
  quantity: number;
  conformDate: string;
  size: string;
}

type GroupedItems = {
  [date: string]: OrderItems[];
};


type Products = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

type CartItemType = {
  selectedSize?: string;
  cartItems: {
    items: Products[];
  }
}

type UserOrderType = {
  deliveryDate: {
    userOrder: OrderItems[];
  }
}

type ConformType = {
  conformDate: string
}


const OrderItems = () => {

  const [isClient, setIsClient] = useState(false);
  const [buttonState, setButtonState] = useState<{ [key: string]: string }>({});

  const checkoutItems = useSelector((state:CartItemType) => state.cartItems.items);
  const dispatch = useDispatch();

  // add local storage in to the store
  useEffect(() => {
    if (typeof window !== "undefined") {
      const deliveryDate = JSON.parse(localStorage.getItem("deliveryDate") || "[]");
      const userOrder = JSON.parse(localStorage.getItem("userOrder") || "[]");
      dispatch(hydrateOrder({ deliveryDate, userOrder }));
    }
  }, [dispatch]);

  // Ensure rendering happens only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const conformDeliveryDate = useSelector((state: UserOrderType) => state.deliveryDate.userOrder);

  // Render a loading or placeholder state until the client hydrates
  if (!isClient) {
    return null; // Or return a skeleton/loading indicator
  }

  // Group items by `conformDate`
  const groupedItems:GroupedItems = conformDeliveryDate.reduce(
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

  const againClickHandle = (name:string,image:string,price:string,id:string,selectedSize:string,conformDate:string) =>{

     // Check if the product is already in the cart
     const existingItem = checkoutItems.find(
      (item:Products) => item.id === id && item.selectedSize === selectedSize
    );

    // Prevent adding more than 10 of the same product
    if (existingItem && existingItem.quantity >= 10) {
      alert("You cannot add more than 10 of the same product.");
      return;
    }

   // Update button state
   setButtonState((prev) => ({
    ...prev,
    [id]: "added", // "added" state to show that it was added
    }));

    setTimeout(() => {
      setButtonState((prev) => ({
        ...prev,
        [id]: "default", // Reset to default after 2 seconds
      }));
    }, 2000);

    dispatch(addToCart());
    dispatch(addItem({name,image,price,id,selectedSize,conformDate}))

  }


  const formatDate = (dateString: string) => {
    return new Date(dateString);
  };

  const isPastDate = (date: string) => {
    const today = new Date();
    const conformDate = formatDate(date);
    return conformDate > today;
  };

  return conformDeliveryDate.length !== 0 ? (
    <div className="order-item-container">

      <TopBarOfCartPage order='useOrder'/>

      {Object.entries(groupedItems).map(([date, items], groupIndex) => {

        // Check if any item in the group has a past delivery date
        const isReceived = items.some((item:ConformType) => isPastDate(item.conformDate));

        return (

        <div
          className={`same-date-item-container ${isReceived? 'item-received':null}`}
          key={groupIndex}
        >

          {/* Conditional rendering for delivery date or received message */}
          {isReceived ? (
            <h2>Congratulations! Your item has been successfully delivered.</h2>
          ) : (
            <h3>Arriving on: {date}</h3>
          )}


          {items.map((item:OrderItems, index:number) => {

            const SelectedSize = item.size?.replace(".size-", "");

            return(

              <div className={`each-item-container ${index == 0?'item-first':null}`} key={index}>

                <img src={item.image && decodeURIComponent(item.image)} alt={item.name}/>

                <div className="item-details-display">
                  
                  <div className="item-details">
                    <h5>{decodeURIComponent(item.name)}</h5>
                    <p>Quantity : <span>{item.quantity}</span></p>
                    {
                      item.size && <p>Size : <span>{SelectedSize}</span></p>
                    }

                    <button
                      className={`again-clicked-${item.id}`}
                      onClick={() => againClickHandle(item.name, item.image, item.price, item.id, item.size,item.conformDate)}
                    >
                      {buttonState[item.id] === "added" ? (
                        <strong>&#x2713; Added</strong>
                      ) : (
                        <>
                          <img src="/ByItAgain/by-it-again.png" alt=""/>
                          By it again
                        </>
                      )}
                    </button>

                  </div>

                  <Link 
                    href={{
                      pathname :'/components/TrackingPage',
                      query:{
                        name: item.name,
                        image: item.image,
                        date: item.conformDate,
                        size: item.size,
                        quantity: item.quantity,
                      }
                    }}
                  >
                    <button className="track-button">
                      Track Package
                    </button>
                  </Link>
                  
                </div>

              </div>
            )
          })}
        </div>
      )})}

    </div>
  ):(
    <>
      <h1>YOUR ORDER IS EMPTY</h1>
      <EmptyCart/>
    </>
  )
}

export default OrderItems
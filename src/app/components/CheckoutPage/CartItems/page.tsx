import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import Link from 'next/link'

import { addItem, removeItemQuantity, removeItem } from "../../SelectedPage/ImageDisplay/AddToCartBtn/cartSlice";
import { addDeliveryDate, removeDeliveryDate } from "./cartItems";
import { addToCart, removeFromCart, removeFromCartOfQuantityBase } from "../../HomePage/navbar/CartLogo/cartLogoSlice";

type Products = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  selectedSize: string;
};

const CartItems = () => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const checkoutItems = useSelector((state: any) => state.cartItems.items);
  const dispatch = useDispatch();

  // Initialize default delivery options
  useEffect(() => {
    if (checkoutItems.length > 0) {
      const defaultOptions = checkoutItems.reduce((acc, item) => {
        const productSize = item.selectedSize.replace(".size-", "");
        const key = `${item.id}-${productSize}`;
        if (!(key in acc)) {
          acc[key] = selectedOptions[key] || "option1"; // Retain existing or set default
        }
        return acc;
      }, {} as { [key: string]: string });

      setSelectedOptions((prev) => ({ ...prev, ...defaultOptions }));
    }
  }, [checkoutItems]);

  useEffect(() => {
    // Filter unique keys to avoid redundant dispatches
    Object.entries(selectedOptions).forEach(([key, selectedOption]) => {
      const existingItem = checkoutItems.find(
        (item) => `${item.id}-${item.selectedSize.replace(".size-", "")}` === key
      );
  
      if (existingItem) {
        dispatch(addDeliveryDate({ id: key, selectedOption }));
      }
    });
  }, [selectedOptions, checkoutItems, dispatch]);
  

  const findDeliveryDate = (deliveryDate: number) => {
    const date = new Date();
    date.setDate(date.getDate() + deliveryDate);
    return {
      monthName: date.toLocaleString("default", { month: "long" }),
      dayName: date.toLocaleString("default", { weekday: "long" }),
      today: date.getDate(),
    };
  };

  const handleOptionChange = (id: string, size: string, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [`${id}-${size}`]: option,
    }));
  };

  const changeQuantity = (value: string, id: string, selectedSize: string) => {

    if (value === "+") {
      dispatch(addItem({ id, selectedSize }));

      const item = checkoutItems.find(
        (item) => item.id === id && item.selectedSize === selectedSize
      );
      if (item && item.quantity < 10) {
        dispatch(addToCart());
      }else{
        alert("You cannot add more than 10 items of the same size for this product.");
        return;
      }

    } else if (value === "-") {
      dispatch(removeItemQuantity({ id, selectedSize }));
      const item = checkoutItems.find(
        (item) => item.id === id && item.selectedSize === selectedSize
      );
      if (item && item.quantity > 1) {
        dispatch(removeFromCart());
      }else{
        alert("The minimum quantity for this product is 1. You cannot reduce it further.");
        return;
      }
    }

  };

  // remove from cart 
  const handleRemoveItem = (id: string, selectedSize: string, itemQuantity: number,selectedOption:string,dateId:string) => {
    dispatch(removeItem({ id, selectedSize }));

    let productId = dateId.replace('.size-', '');
    dispatch(removeDeliveryDate({ productId, selectedOption }));

    dispatch(removeFromCartOfQuantityBase({ quantity: itemQuantity }));
  };

  return checkoutItems.length != 0 ? (
    <div className="col-12 col-lg-8 cart-items-container">
      <h3>Review your order</h3>
      {checkoutItems.map((item: Products, index: number) => {
        const productSize = item.selectedSize.replace(".size-", "");
        const selectedOption = selectedOptions[`${item.id}-${productSize}`];
        const deliveryDate =
          selectedOption === "option1"
            ? findDeliveryDate(7)
            : selectedOption === "option2"
            ? findDeliveryDate(5)
            : findDeliveryDate(3);

        return (
          <div key={index} className="cart-each-items">
            <h5>
              Delivery date:{" "}
              <span>
                {deliveryDate.dayName}, {deliveryDate.monthName} {deliveryDate.today}
              </span>
            </h5>
            <div className="cart-details-container">
              <div className="col-12 col-md-6 cart-details-display">
                <img src={decodeURIComponent(item.image)} alt={item.name} style={{ width: "100px" }} />
                <div>
                  <h5>{decodeURIComponent(item.name)}</h5>
                  <b className="price-display">
                    Price: <span>${item.price}</span>
                  </b>
                  <p>
                    Size: <span>{productSize}</span>
                  </p>
                  <div className="quantity-plus-mines-button-display">
                    <p>
                      Quantity:{" "}
                      <button 
                        className="minus-button"
                        onClick={() => changeQuantity("-", item.id, item.selectedSize)}
                        disabled={item.quantity <=1}
                      >-</button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button 
                        className="plus-button"
                        onClick={() => changeQuantity("+", item.id, item.selectedSize)}
                        disabled={item.quantity >=10}
                      >+</button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 delivery-date-option-container">
                <h5>Choose a delivery option:</h5>
                {["option1", "option2", "option3"].map((option, i) => {
                const deliveryDate = findDeliveryDate(7 - i * 2);
                  return (
                    <div key={i}>
                      <input
                        type="radio"
                        name={`date-select-${item.id}-${productSize}`}
                        onChange={() => handleOptionChange(item.id, productSize, option)}
                        value={option}
                        checked={selectedOptions[`${item.id}-${productSize}`] === option}
                      />
                      <label>
                        {`${deliveryDate.dayName}, ${deliveryDate.monthName} ${deliveryDate.today}`}
                      </label>
                    </div>
                  );
                })}
              </div>

            </div>
            <h5 
              className="remove-cart" 
              title="Remove this item"
              onClick={()=>handleRemoveItem(item.id, item.selectedSize,item.quantity,selectedOption,
                `${item.id}-${item.selectedSize}`)}
            >
              <MdRemoveShoppingCart />
              REMOVE
            </h5>
          </div>
        );
      })}
    </div>
  ):(
    // items is 0 at the time this work
    <div className="empty-cart-container">
        <img src="/EmptyCart/emptyImage.png" alt="" />
        <h5>Your cart is empty!</h5>
        <p>Add items to it now.</p>
        <Link href="/" style={{textDecoration:"none",color:"white"}}>Start Shopping</Link>
    </div>
  )
};

export default CartItems;
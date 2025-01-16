import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

type Products = {
  id: string,
  name: string,
  image: string,
  price: number,
  quantity: number,
  size: string,
  selectedSize: string,
}
const CartItems = () => {

  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({})  

  const checkoutItems = useSelector((state:any)=> state.cartItems.items);

  // created user checked option
  const handleOptionChange = (id: string, size: string, option: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [`${id}-${size}`]: option,
    }));
  };

  // created default checked in first delivery option
  useEffect(() => {
    if (checkoutItems.length > 0) {
      const defaultOptions = checkoutItems.reduce((acc: { [key: string]: string }, item: Products) => {
        const productSize = item.selectedSize.replace(".size-", ""); // Ensure the size is processed correctly
        acc[`${item.id}-${productSize}`] = "option1"; // Set "option1" as the default for each item-size pair
        return acc;
      }, {});
      setSelectedOptions(defaultOptions);
    }
  }, [checkoutItems]);

  // created user select options and created delivery date
  const findDeliveryDate = (deliveryDate:number) => {
    let date = new Date();
  
    // Add 3 days to the date
    date.setDate(date.getDate() + deliveryDate);
  
    let monthName = date.toLocaleString('default', { month: 'long' });
    let dayName = date.toLocaleString('default', { weekday: 'long' });
    let today = date.getDate();

    return {monthName, dayName, today}
  }

  return (
    <div className='col-12 col-lg-8 cart-items-container'>
      <h3>Review your order</h3>
      {
        checkoutItems.map((item:Products,index:number) => {

          let productSize = item.selectedSize
          productSize = productSize.replace(".size-", "");

          // change the heading delivery date
          const selectedOption = selectedOptions[`${item.id}-${productSize}`];
          let deliveryDate;
          if (selectedOption === 'option1') {
            deliveryDate = findDeliveryDate(7);
          } else if (selectedOption === 'option2') {
            deliveryDate = findDeliveryDate(5);
          } else if (selectedOption === 'option3') {
            deliveryDate = findDeliveryDate(3);
          } else {
            deliveryDate = findDeliveryDate(7);
          }

          return (
            <div key={index} className='cart-each-items'>

              <h5>Delivery date : 
                <span>
                {`${deliveryDate.dayName}, ${deliveryDate.monthName} ${deliveryDate.today}`}
                </span>
              </h5>

              <div className="cart-details-container">

                <div className="col-12 col-md-6 cart-details-display">
                  <img src={decodeURIComponent(item.image)} alt={item.name} style={{width:'100px'}}/>
                  <div>
                    <h5>{decodeURIComponent(item.name)}</h5>
                    <b className="price-display">Price: <span>${item.price}</span></b>
                    <p>Quantity: <span>{item.quantity}</span></p>
                    <p>Size: <span>{productSize}</span></p>
                  </div>
                </div>

                <div className="col-12 col-md-6 delivery-date-option-container">
                  <h5>Choose a delivery option:</h5>

                  <input 
                    type="radio"
                    name={`date-select-${item.id}-${productSize}`}
                    onChange={()=>handleOptionChange(item.id,productSize,'option1')}
                    value='option1'
                    checked={selectedOptions[`${item.id}-${productSize}`] === 'option1'}
                  />
                  <label>
                    {`${findDeliveryDate(7).dayName}, ${findDeliveryDate(0).monthName} ${findDeliveryDate(7).today}`}
                  </label>
                  <p>FREE - shipping</p>

                  <input 
                    type="radio" 
                    name={`date-select-${item.id}-${productSize}`}
                    onChange={()=>handleOptionChange(item.id,productSize,'option2')}
                    value='option2'
                    checked={selectedOptions[`${item.id}-${productSize}`] === 'option2'}
                  />
                  <label>
                    {`${findDeliveryDate(5).dayName}, ${findDeliveryDate(0).monthName} ${findDeliveryDate(5).today}`}
                  </label>
                  <p>10 - Shipping</p>

                  <input 
                    type="radio"
                    name={`date-select-${item.id}-${productSize}`}
                    onChange={()=>handleOptionChange(item.id,productSize,'option3')}
                    value='option3'
                    checked={selectedOptions[`${item.id}-${productSize}`] === 'option3'}
                  />
                  <label>
                    {`${findDeliveryDate(3).dayName}, ${findDeliveryDate(0).monthName} ${findDeliveryDate(3).today}`}
                  </label>
                  <p>18 - Shipping</p>

                </div>

              </div>
              
            </div>
          )
        })
      }
    </div>
  )
}

export default CartItems
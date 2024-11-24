import '@/app/styles/homepage/largeproduct/largeproduct.scss';

import { fetchProduct } from "@/app/DataFetching/productData";
import { ACTION_SUFFIX } from 'next/dist/lib/constants';
const response = await fetchProduct();

type Products = {
  name: string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
}

// large items
const refrigerator = response.filter((product:Products) => product.type === 'refrigerator');
const washingMachine = response.filter((product:Products) => product.type === 'washing-machine');
const ac = response.filter((product:Products) => product.type === 'ac');
const gasCooker = response.filter((product:Products) => product.type === 'gas-cooker');

function LargeProduct() {
  return (
    <div className="homepage-dynamic-large">

      {/* create Refrigerator */}
      <div className="homepage-large-container col-6 col-lg-3">
        <div className="large-product-title">
          <h3>Refrigerator</h3>
        </div>
        {
          refrigerator.map((refrigerator:Products) => {
            return (
              <div key={refrigerator.id} className="product-card">
                <img src={refrigerator.image} alt={refrigerator.name} />
              </div>
            )
          })
        }
      </div>

        {/* create washing machine */}
      <div className="homepage-large-container col-6 col-lg-3">
        <div className="large-product-title">
          <h3>Washing Machine</h3>
        </div>
        {
          washingMachine.map((washingMachine:Products) => {
            return (
              <div key={washingMachine.id} className="product-card">
                <img src={washingMachine.image} alt={washingMachine.name} />
              </div>
            )
          })
        }
      </div>

      {/* create Gas Cooker */}
      <div className="homepage-large-container col-6 col-lg-3">
        <div className="large-product-title">
          <h3>Gas Cooker</h3>
        </div>
        {
          gasCooker.map((gasCooker:Products) => {
            return (
              <div key={gasCooker.id} className="product-card">
                <img src={gasCooker.image} alt={gasCooker.name} />
              </div>
            )
          })
        }
      </div>


      {/* create AC */}
      <div className="homepage-large-container col-6 col-lg-3">
        <div className="large-product-title">
          <h3>AC</h3>
        </div>
        {
          ac.map((ac:Products) => {
            return (
              <div key={ac.id} className="product-card"> 
                <img src={`${ac.image}?timestamp=${Date.now()}`} alt={ac.name} />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default LargeProduct

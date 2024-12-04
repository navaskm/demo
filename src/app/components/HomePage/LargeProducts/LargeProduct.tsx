import '@/app/styles/homepage/largeproduct/largeproduct.scss';

import { fetchProduct } from "@/app/DataFetching/productData";
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

type ItemOne = {
  product?: string,
}

// large items
const refrigerator = response.filter((product:Products) => product.type === 'refrigerator');
const washingMachine = response.filter((product:Products) => product.type === 'washing-machine');
const bed = response.filter((bed:Products) => bed.type === 'bed');
const table = response.filter((table:Products) => table.type === 'table');
const gasCooker = response.filter((gasCooker:Products) => gasCooker.type === 'gas-cooker');
const ac = response.filter((ac:Products) => ac.type === 'ac');


// last one item
const curtain = response.filter((curtain:Products) => curtain.type === 'curtain');
const waterHouse = response.filter((waterHouse:Products) => waterHouse.type === 'waterHouse');
const waterTank = response.filter((waterTank:Products) => waterTank.type === 'waterTank');

function LargeProduct({product}:ItemOne) {

  let item: Products[] | null = null;

  if (product == 'curtain'){
    item = curtain;
  }else if(product == 'waterHouse'){
    item = waterHouse;
  }else if(product == 'waterTank'){
    item = waterTank;
  }

  return product == null ? (
    <div className="homepage-dynamic-large">

      {/* create Refrigerator */}
      <div className="homepage-large-container col-6 col-md-4 col-lg-3">
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
      <div className="homepage-large-container col-6 col-md-4 col-lg-3">
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


        {/* only medium device display */}
      {/* create Bed */}
      <div className="homepage-large-container col-6 col-md-4 col-lg-3  medium-device-display">
        <div className="large-product-title">
          <h3>Bed</h3>
        </div>
        {
          bed.map((bed:Products) => {
            return (
              <div key={bed.id} className="product-card">
                <img src={bed.image} alt={bed.name} />
              </div>
            )
          })
        }
      </div>

        {/* only medium device display */}
      {/* create Table */}
      <div className="homepage-large-container col-6 col-md-4 col-lg-3  medium-device-display">
        <div className="large-product-title">
          <h3>Table</h3>
        </div>
        {
          table.map((table:Products) => {
            return (
              <div key={table.id} className="product-card"> 
                <img src={table.image} alt={table.name} />
              </div>
            )
          })
        }
      </div>

      {/* create gasCooker */}
      <div className="homepage-large-container col-6 col-md-4 col-lg-3">
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
      <div className="homepage-large-container col-6 col-md-4 col-lg-3">
        <div className="large-product-title">
          <h3>AC</h3>
        </div>
        {
          ac.map((ac:Products) => {
            return (
              <div key={ac.id} className="product-card"> 
                <img src={ac.image} alt={ac.name} />
              </div>
            )
          })
        }
      </div>

    </div>

  ) : (

    <div className="homepage-large-container col-6 col-md-4 col-lg-3">

      <div className="large-product-title">
        {
          item && item.length > 0 && <h3>{item[0].name}</h3>
        }
      </div>

      {
        item && item.map((item:Products) => { 
          return (
            <div key={item.id} className="last-large-product">
              <img src={item.image} alt={item.name} />
            </div>
          )
        })
      }

    </div>  
  )
}

export default LargeProduct
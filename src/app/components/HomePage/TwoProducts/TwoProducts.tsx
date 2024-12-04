import '@/app/styles/homepage/twoproduct/twoproduct.scss';
import { fetchProduct } from "@/app/DataFetching/productData";

type Products = {
  name: string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  offer:string,
  id: number,
}

type ItemOne = {
  product?: string,
}

let smallItems:Products[] = [];

const response = await fetchProduct();

const lapTop = response.filter((lapTop:Products) => lapTop.type === 'lapTop');
const perFume = response.filter((perfume:Products) => perfume.type === 'perFume');
const cooker = response.filter((cooker:Products) => cooker.type === 'cooker');
const bulb = response.filter((bulb:Products) => bulb.type === 'bulb');
const umbrella = response.filter((umbrella:Products) => umbrella.type === 'umbrella');
const chair = response.filter((chair:Products) => chair.type === 'chair');

//console.log(lapTop);

smallItems.push(...lapTop);
smallItems.push(...perFume);
smallItems.push(...cooker);
smallItems.push(...bulb);
smallItems.push(...umbrella);
smallItems.push(...chair);


// last one items
const tv = response.filter((tv:Products) => tv.type === 'tv');
const slipper = response.filter((slipper:Products) => slipper.type === 'slipper');
const clock = response.filter((clock:Products) => clock.type === 'Clock');
const waterBottle = response.filter((waterBottle:Products) => waterBottle.type === 'WaterBottle');
const healthyFood = response.filter((healthyFood:Products) => healthyFood.type === 'healthyFood');
const phoneCharger = response.filter((phoneCharger:Products) => phoneCharger.type === 'phoneCharger');

function TwoProducts({product}:ItemOne) {

  let item: Products[] | null = null;

  if (product == 'tv'){
    item = tv;
  }else if (product == 'slipper'){
    item = slipper;
  }else if (product == 'Clock'){
    item = clock;
  }else if (product == 'WaterBottle'){
    item = waterBottle;
  }else if (product == 'healthyFood'){
    item = healthyFood;
  }else if (product == 'phoneCharger'){
    item = phoneCharger;
  }

  return product == null?  (
    <div className='home-page-two-product'>

      {
        smallItems.map((item:Products, index:number) => {

          const findProduct = (productType:string) => {
            return smallItems.filter((item:Products) => item.type === productType);
          }
          let Product = findProduct(item.type);

          let displayOneItem = index % 2 === 0;

          let onlyMediumDevice = (item.type === 'umbrella' || item.type === 'chair')? 'only-medium-device': null;

          //console.log(onlyMediumDevice);


          return displayOneItem && (
            
            <div key={item.id} className={`col-6 col-md-4 col-lg-3 container-of-two-product ${onlyMediumDevice}`}>

              <div className='title-of-two-product'>
                <h3>{item.name}</h3>
              </div>

              {
                Product && Product.map((Product:Products,index:number) => {

                  // create classname
                  let marginBottom = index === 0 ? 'marginBottom' : null;
                  return (
                    <div key={Product.id} className={`image-offer-display-of-two-product ${marginBottom}`}>
                      <img  src={Product.image} alt={Product.name} />
                      <h5>{Product.offer}</h5>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }


      {/* create Cooker */}
      {/* <div className='col-6 col-md-4 col-lg-3 container-of-two-product'>
        <div className='title-of-two-product'>
          <h3>Cooker</h3>
        </div>
        {
          cooker.map((lap:Products,index:number) => {
            // create classname
            let marginBottom = index === 0 ? 'marginBottom' : null;
            return (
              <div key={lap.id} className={`image-offer-display-of-two-product ${marginBottom}`}>
                <img src={lap.image} alt={lap.name} />
                <h5>{lap.offer}</h5>
              </div>
            )
          })
        }
      </div> */}

    </div>
  ):(
      
    //create 2 products in lastOne products
    <div className={`col-6 col-md-4 col-lg-3 container-of-two-product  ${item?.[0]?.type || null}`}>

      <div className='title-of-two-product'>
        {
          item && item.length > 0 && <h3>{item[0].name}</h3>
        }
      </div>
      {

        item && item.map((item:Products,index:number) => {
          // create custom classname
          let marginBottom = index === 0 ? 'marginBottom' : null;
          return (
            <div key={item.id}className={`last-products-display ${marginBottom}`}>
            <img src={item.image} alt={item.name} />
              <h5>{item.offer}</h5>
            </div>
          )
        })
        
      }
    </div>  
    
  )
}

export default TwoProducts
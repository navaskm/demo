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


const response = await fetchProduct();
const lapTop = response.filter((product:Products) => product.type === 'lap-top');
const perfume = response.filter((product:Products) => product.type === 'perfume');
const cooker = response.filter((product:Products) => product.type === 'cooker') 


function TwoProducts() {

  return (
    <div className='home-page-two-product'>

      {/* create laptop */}
      <div className='col-6 col-lg-3 container-of-two-product'>
        <div className='title-of-two-product'>
          <h3>LapTop</h3>
        </div>
        {
          lapTop.map((lap:Products,index:number) => {
            // create classname
            let marginBottom = index === 0 ? 'marginBottom' : null;
            return (
              <div key={lap.id} className={`image-offer-display-of-two-product ${marginBottom}`}>
                <img  src={lap.image} alt={lap.name} />
                <h4>{lap.offer}</h4>
              </div>
            )
          })
        }
      </div>


      {/* create perfume */}
      <div className='col-6 col-lg-3 container-of-two-product'>
        <div className='title-of-two-product'>
          <h3>Perfume</h3>
        </div>
        {
          perfume.map((perfume:Products,index:number) => {
            // create classname
            let marginBottom = index === 0 ? 'marginBottom' : null;
            //`${perfume.image}?timestamp=${Date.now()}`
            return (
              <div className={`image-offer-display-of-two-product ${marginBottom}`} key={perfume.id}>
                <img src={perfume.image} alt={perfume.name} />
                <h4>{perfume.offer}</h4>
              </div>
            )
          })
        }
      </div>


      {/* create laptop */}
      <div className='col-6 col-lg-3 container-of-two-product'>
        <div className='title-of-two-product'>
          <h3>LapTop</h3>
        </div>
        {
          cooker.map((lap:Products,index:number) => {
            // create classname
            let marginBottom = index === 0 ? 'marginBottom' : null;
            return (
              <div key={lap.id} className={`image-offer-display-of-two-product ${marginBottom}`}>
                <img src={lap.image} alt={lap.name} />
                <h4>{lap.offer}</h4>
              </div>
            )
          })
        }
      </div>


      {/* create laptop */}
      <div className='col-6 col-lg-3 container-of-two-product'>
        <div className='title-of-two-product'>
          <h3>LapTop</h3>
        </div>
        {
          lapTop.map((lap:Products,index:number) => {
            // create classname
            let marginBottom = index === 0 ? 'marginBottom' : null;
            return (
              <div key={lap.id}className={`image-offer-display-of-two-product ${marginBottom}`}>
                <img src={lap.image} alt={lap.name} />
                <h4>{lap.offer}</h4>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default TwoProducts
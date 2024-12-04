import { fetchScrollingProduct } from '@/app/DataFetching/productData';
import '@/app/styles/homepage/smallScrolling/smallScrolling.scss';

type Products = {
  name: string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
  offer: string,
}

type Item = {
  item: string;
}

const response = await fetchScrollingProduct();
const faceWash = response.filter((faceWash:Products) => faceWash.type === 'face-wash');
const phone = response.filter((phone:Products) => phone.type === 'phone');

function SmallScrolling({item}: Item) {
  return (
    <div className={`container-small-scrolling ${item}`}>

      <div className='title-of-small-scrolling'>
        {
          item === 'faceWash'? (
            <h2>Unveil the Glow Within</h2>
          ):(
            <h2>Luxury in Every Swipe</h2>
          )
        }
        
      </div>

      <div className='container-of-small-product'>
        {
          item === 'faceWash'?(
            faceWash.map((faceWash:Products) => {
              return (
                <div key={faceWash.id} className='item-box'>
                  <img src={faceWash.image} alt={faceWash.name} />
                  <div>
                    <p>{faceWash.name}</p>
                  </div>
                  <div>
                    <h4>{faceWash.offer}</h4>
                  </div>
                </div>
              )
            })
          ):(
            phone.map((phone:Products) => {
              return (
                <div key={phone.id} className='item-box'>
                  <img src={phone.image} alt={phone.name} />
                  <div>
                    <p>{phone.name}</p>
                  </div>
                  <div>
                    <h4>{phone.offer}</h4>
                  </div>
                </div>
              )
            })
          )
          
        }
      </div>

    </div>
  )
}

export default SmallScrolling

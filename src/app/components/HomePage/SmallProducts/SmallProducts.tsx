import '@/app/styles/homepage/smallProducts/smallproducts.scss';
import { fetchProduct } from "@/app/DataFetching/productData"
import ClintSmallProduct from './ClintSmallProduct';

type Products = {
  name: string,
  title:string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
}

const fourItems:Products[] | [] = [];

const response = await fetchProduct();
const productWatch = response.filter((watch:Products) => watch.type === 'watch');
const productShoes = response.filter((Shoes:Products) => Shoes.type === 'shoes');
const productForMens = response.filter((Mens:Products) => Mens.type === 'mens-clothes');
const productForWomen = response.filter((women:Products) => women.type == 'women-clothes');
const productJewelry = response.filter((jewelry:Products) => jewelry.type === 'Jewelry');
const productSoundHub = response.filter((soundHub:Products) => soundHub.type === 'sound-hub');
const productSunglass = response.filter((sunglass:Products) => sunglass.type === 'sunglass');
const productToys = response.filter((toys:Products) => toys.type === 'toys');

fourItems.push( ...productWatch, ...productShoes, ...productForMens, ...productForWomen, ...productJewelry, ...productSoundHub, ...productSunglass, ...productToys)

function SmallProducts() {
  return (
    <div className="container-of-all-products row">

      {
        fourItems.map((product:Products, index:number) => {

          // find which product display
          const findProduct = (productType:string) => {
            return fourItems.filter((item: Products) => item.type === productType);
          }
          let oneProduct = findProduct(product.type);

          // create only only product display
          let displayOneItem = index % 3 === 2;
          if(index === 11 || index === 23){
            displayOneItem = false;
          }

          const a = (product.type === 'toys' || product.type === 'sunglass')? 'only-large-device':null;

          return displayOneItem && (
            <div className={`container-of-one-product col-6 col-md-4 col-xl-3 ${a}`}
            key={product.id}>

              <div className='title'>
                <h3>{product.title}</h3>
              </div>
              
              <div className='product-body'>
                {
                  oneProduct.map((item:Products) => {
                    return (
                      <div key={item.id} className="product-details-display">
                        <ClintSmallProduct item={item}/>
                        {/* <img src={item.image} alt={item.name}/>
                        <div className='name-price-display'>
                          <h6>{item.name}</h6>
                          <div className='price-star-display'>
                            <b><span>₹</span>{item.priceCents}</b>
                            <p>{item.rating}&#9733;</p>
                          </div>
                        </div> */}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default SmallProducts
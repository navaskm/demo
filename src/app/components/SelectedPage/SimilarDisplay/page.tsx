import { fetchProduct } from "@/app/DataFetching/productData";
import { fetchScrollingProduct } from "@/app/DataFetching/productData";
import Link from "next/link";
import similarProducts from '@/app/API/similar-product.json';
import BackToTop from "./BackToTop/page";

// api similar product lines

// id = 311 is missing

// watch = 1 to 233        = 21
// shoes = 234 to 464      = 21
// mens = 464 to 695       = 21
// women = 696 to 926      = 21
// Jewelry = 927 to 1157   = 21
// sound-hub = 1158 to 1344= 17
// sunglass = 1345 to 1399 = 5
// toys = 1400 to 1498     = 9
                  //total = 136  

// refrigerator 1499 to 1586 = 8 
// washing machine 1587 to 1674 = 8
// gas cooker 1675 to 1762 = 8
// AC 1763 to 1849 = 8
// bed 1850 to 1894 = 4
// table 1895 to 1938 = 4
              //total = 40 

// lapTop 1939 to 2180 = 21
// perFume 2181 to 2279 = 10
// cooker 2280 to 2389 = 10
// bulb 2390 to 2532 = 13
// umbrella 2533 to 2609 = 7
// chair 2610 to 2686 = 7
                  //total = 68

// TV 2687 to 2829 = 13
// water hose 2830 to 2873 = 4
// slipper 2874 to 3104 = 21
// curtain 3105 to 3170 = 6
// tank 3171 to 3236 = 6
// clock 3237 to 3423 = 17
// water bottle 3424 to 3522 = 9
// healthy food 3523 to 3709 = 17
// phone charger 3710 to 37 = 8
                    // total = 101

type Products = {
  name: string,
  title:string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
  company: string,
  madein: string,
  Feature: string,
  size:string,
  offer?: string,
}

const SimilarProducts = async ({selectedImage}:{selectedImage:Products}) => {

  let products : Products[] =  []

  //fetch product
  const similarProductOne = await fetchProduct();
  const productOne = similarProductOne.filter((product:Products)=> product.type===selectedImage.type);

  //fetch scrolling product
  const similarProductTwo = await fetchScrollingProduct();
  const productTwo = similarProductTwo.filter((product:Products)=> product.type===selectedImage.type);

  // find which the product (scrolling api of dynamic api)
  let product = productTwo.length === 0 ? productOne : productTwo;

  // push product in to the products
  products = products.concat(product);

  // remove selectedImage in display
  let finalProduct = products.filter((product:Products) => product.id !== selectedImage.id);

  // fetch similar products
  let similarProduct = similarProducts.filter(product => product.type == selectedImage.type);

  // remove selectedImage in display in similar products
  let similarFinalProduct = similarProduct.filter(product => product.id !== selectedImage.id);

  return (
    <div className="container-of-similar-product">
      {
        selectedImage.offer? <h3>Best offer for you</h3>:<h3>Similar Products</h3>
      }

      {
        selectedImage.offer?  null:<BackToTop/>
      }

      <div className="container-of-each-similar-product">
        {
          finalProduct?.map((product:Products) => {
            return (
              <Link 
              key={product.id} 
              style={{textDecoration:"none"}}
              className="col-4 col-sm-5 col-md-3 col-lg-2 each-similar-product"
              href={{
                pathname: "/components/SelectedPage",
                query: {
                  name: encodeURIComponent(product.name),
                  priceCents: product.priceCents,
                  image: encodeURIComponent(product.image),
                  rating: product.rating,
                  type: product.type,
                  id: product.id,
                  keywords: product.keywords,
                  company: encodeURIComponent(product.company),
                  madein: encodeURIComponent(product.madein),
                  Feature: encodeURIComponent(product.Feature),
                  size: product.size,
                }
              }}>
                  <img src={product.image} alt={product.name}/>
                  <h5>{product.name}</h5>
                  <b><span>₹</span>{product.priceCents}</b>
                  <p>{product.rating}&#9733;</p>
              </Link>
            )
          })
        }
        {
          similarFinalProduct?.map(product => {
            return (
              <Link 
              className="col-4 col-sm-5 col-md-3 col-lg-2 each-similar-product"
              key={product.id}
              style={{textDecoration:"none"}}
              href={{
                pathname: "/components/SelectedPage",
                query: {
                  name: encodeURIComponent(product.name),
                  priceCents: product.priceCents,
                  image: encodeURIComponent(product.image),
                  rating: product.rating,
                  type: product.type,
                  id: product.id,
                  keywords: product.keywords,
                  company: encodeURIComponent(product.company),
                  madein: encodeURIComponent(product.madein),
                  Feature: encodeURIComponent(product.Feature),
                }
              }}>
                <img src={product.image} alt={product.name}/>
                <h5>{product.name}</h5>
                <b><span>₹</span>{product.priceCents}</b>
                <p>{product.rating}&#9733;</p>
              </Link>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default SimilarProducts
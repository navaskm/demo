import { fetchProduct } from "@/app/DataFetching/productData";
import { fetchScrollingProduct } from "@/app/DataFetching/productData";
import similarProduct from '@/app/API/similar-product.json';

// api similar product lines
// watch = 1 to 233

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
}

const SimilarProducts = async ({selectedImage}:{selectedImage:Products}) => {

  let items : Products[] =  []

  //fetch product
  const similarProductOne = await fetchProduct();
  const productOne = similarProductOne.filter((product:Products)=> product.type===selectedImage.type);

  //fetch scrolling product
  const similarProductTwo = await fetchScrollingProduct();
  const productTwo = similarProductTwo.filter((product:Products)=> product.type===selectedImage.type);

  // find which the product (scrolling api of dynamic api)
  let product = productTwo.length === 0 ? productOne : productTwo;

  // push product in to the items
  items = items.concat(product);

  // remove selectedImage in display
  let finalProduct = items.filter((product:Products) => product.id !== selectedImage.id);

  let similarFinalProduct = similarProduct.filter(product => product.type === selectedImage.type);

  return (
    <div className="container-of-similar-product">
      <h1>Similar Products</h1>

      <div className="container-of-each-similar-product">
        {
          finalProduct?.map((product:Products) => {
            return (
              <div key={product.id} className="col-md-3 each-similar-product">
                <img src={product.image} alt={product.name}/>
                <h3>{product.name}</h3>
                <p>{product.priceCents}</p>
                <p>{product.rating}</p>
              </div>
            )
          })
        }
        {
          similarFinalProduct?.map(product => {
            return (
              <div key={product.id} className="col-md-3 each-similar-product">
                <img src={product.image}/>
                <h3>{product.name}</h3>
                <p>{product.priceCents}</p>
                <p>{product.rating}</p>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default SimilarProducts
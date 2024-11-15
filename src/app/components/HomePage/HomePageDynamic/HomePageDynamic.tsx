import "@/app/styles/homepage/homepagedynamic/homepagedynamic.scss";
import { fetchProduct } from "../HomePageScrolling/HomePageScrolling";

type Products = {
  id:string;
  name: string,
  image: string,
  priceCents: string,
  rating: string,
  type: string,
  keywords: string
}

const HomePageDynamic = async () => {

  const productsOne = await fetchProduct();

  // <div key={product.id}  className="product-dynamic">
  //           <div>
  //             <h1>{product.name}</h1>
  //             <img src={product.image} alt={product.name} />
  //             <p>Price: {product.priceCents}</p>
  //             <p>Rating: {product.rating}</p>
  //             <p>Type: {product.type}</p>
  //             <p>Keywords: {product.keywords}</p>
  //             <p>ID: {product.id}</p>
  //             <hr />
  //           </div>  
  //         </div>

  return (
    <div className="homepage-dynamic">
      {
        productsOne.map((product:Products) =>(
           <div className="product-dynamic">
              <div>
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name} />
                <p>Price: {product.priceCents}</p>
                <p>Rating: {product.rating}</p>
                <p>Type: {product.type}</p>
                <p>Keywords: {product.keywords}</p>
                <p>ID: {product.id}</p>
                <hr />
              </div>
           </div> 
        ))
      }
    </div> 
  )
}

export default HomePageDynamic;
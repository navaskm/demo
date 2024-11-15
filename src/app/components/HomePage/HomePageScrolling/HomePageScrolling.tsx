import "@/app/styles/homepage/homepagescrolling/homepagescrolling.scss";

type Products = {
  id:string;
  name: string,
  image: string,
  priceCents: string,
  rating: string,
  type: string,
  keywords: string
}

export const fetchProduct = async (): Promise<Products[]> => {
  const response = await fetch("https://6732f3e02a1b1a4ae1117250.mockapi.io/Products")
  return response.json();
}

const HomePageScrolling = async () => {

  //await new Promise((resolve) => setTimeout(resolve,2000));
  const products = await fetchProduct();

  return (
    <div className="homepage-scrolling">
      {
        products.map((product:Products) =>(
          <div key={product.id} className="product-scrolling">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>Price: {product.priceCents}</p>
            <p>Rating: {product.rating}</p>
            <p>Type: {product.type}</p>
            <p>Keywords: {product.keywords}</p>
            <p>ID: {product.id}</p>
            <hr />
          </div>
        ))
      }

    </div> 
  )
}

export default HomePageScrolling;
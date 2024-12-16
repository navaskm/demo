import { fetchProduct } from "@/app/DataFetching/productData";
import { fetchScrollingProduct } from "@/app/DataFetching/productData";

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

const SimilarProducts = ({selectedImage}:{selectedImage:Products}) => {
  let a = selectedImage.keywords
  console.log(a);
  return (
    <div>
      <h1>hello</h1>
      <h1>{selectedImage.keywords}</h1>
    </div>
  )
}

export default SimilarProducts
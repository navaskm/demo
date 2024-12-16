import NavBar from "../HomePage/navbar/NavBar";
import ImageDisplay from "./ImageDisplay/ImageDisplay";
import ImageFeature from "./ImageFeature/ImageFeature";
import SimilarProducts from "./SimilarDisplay/page";
import '@/app/styles/selectdpage/selectpage.scss';

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

const SelectItemPage = ({searchParams}:{searchParams:Products}) => {

  return (
      <>
        <NavBar/>

        <div className="image-features-container">
          {/* image size,image, add to cart, quantity of product display searchParams={searchParams} */}
          <ImageDisplay selectedImage={searchParams} />

          {/* features display */}
          <ImageFeature selectedImage={searchParams} /> 
        </div>

        {/* similar products display */}
          <SimilarProducts selectedImage={searchParams} />

      </>
  )
}

export default SelectItemPage
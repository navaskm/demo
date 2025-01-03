import { lazy,Suspense } from "react";

const NavBar = lazy(() => import("../HomePage/navbar/NavBar"));
const ImageDisplay = lazy(() => import("./ImageDisplay/ImageDisplay"));
const ImageFeature = lazy(() => import("./ImageFeature/ImageFeature"));
const SimilarProducts = lazy(() => import("./SimilarDisplay/page"));

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
        <Suspense fallback={<p>loading...</p>}>
          <NavBar/>
        </Suspense>

        <div className="image-features-container">
            {/* image size,image, add to cart, quantity of product display*/}
          <Suspense fallback={<p>loading...</p>}>
            <ImageDisplay selectedImage={searchParams} />
          </Suspense>

            {/* features display */}
          <Suspense fallback={<p>loading...</p>}>
            <ImageFeature selectedImage={searchParams} /> 
          </Suspense>
        </div>

        {/* similar products display */}
        <Suspense fallback={<p>loading...</p>}>
          <SimilarProducts selectedImage={searchParams} />
        </Suspense>

      </>
  )
}

export default SelectItemPage
import { Suspense, lazy } from "react";

const NavBar = lazy(() => import("./components/HomePage/navbar/NavBar"));
const MainOffers = lazy(() => import ("./components/HomePage/MainOffers/MainOffers"));
const SmallProducts = lazy(() => import("./components/HomePage/SmallProducts/SmallProducts"))
const HomePageScrolling = lazy(() => import("./components/HomePage/HomePageScrolling/HomePageScrolling"));
const LargeProduct = lazy(() => import("./components/HomePage/LargeProducts/LargeProduct"));
const TwoProducts = lazy(() => import("./components/HomePage/TwoProducts/TwoProducts"))
//import TwoProducts from "./components/HomePage/TwoProducts/TwoProducts";

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading Navbar....</p>}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<p>Loading Offers ....</p>}>
        <MainOffers/>
      </Suspense>

      <Suspense fallback={<p>loading products ....</p>}>
        <SmallProducts/>
      </Suspense>   
        
      <Suspense fallback={<p>Loading bags......</p>}>
        <HomePageScrolling item='bag'/>
      </Suspense>

      <Suspense fallback={<p>Loading bags......</p>}>
        <HomePageScrolling item='sports-item'/>
      </Suspense>

      <Suspense fallback={<p>Loading largeProducts</p>}>
        <LargeProduct />
      </Suspense>

      <Suspense fallback={<p>Loading two products</p>}>
        <TwoProducts />
      </Suspense>

    </>
  );
}
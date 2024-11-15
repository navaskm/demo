import { Suspense, lazy } from "react";

const MainOffers = lazy(() => import ("./components/HomePage/MainOffers/MainOffers"));
const HomePageScrolling = lazy(() => import("./components/HomePage/HomePageScrolling/HomePageScrolling"));
const NavBar = lazy(() => import("./components/HomePage/navbar/NavBar"));
const HomePageDynamic = lazy(() => import("./components/HomePage/HomePageDynamic/HomePageDynamic"))

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading Navbar....</p>}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<p>Loading Offers ....</p>}>
        <MainOffers/>
      </Suspense>

      <Suspense fallback={<p>hello ....</p>}>
        <HomePageDynamic/>
      </Suspense>   
        
      <Suspense fallback={<p>Loading Products......</p>}>
        <HomePageScrolling/>
      </Suspense>
    </>
  );
}
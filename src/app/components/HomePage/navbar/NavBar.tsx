import { Suspense,lazy } from "react";

const AppLogs = lazy(() => import('./AppLogo/AppLogs'));
const SearchBar = lazy(() => import("./SearchBar/SearchBar"));
const Links = lazy(() => import("./Links/Links"));
const Login = lazy(() => import("./Login/Login"));
const CartLogo = lazy(() => import("./CartLogo/CartLogo"));
const MobilHamburger = lazy(() => import("./MobilHamburger/MobilHamburger"));

import "@/app/styles/homepage/navbar/navbar.scss";

const NavBar = () => {

  return (
    <>
      <nav>
        <div className="navbar">

          {/* App logo section */}
          <Suspense fallback={<div>Loading...</div>}>
            <AppLogs />
          </Suspense>

          {/* search bar */}
          <Suspense fallback={<div>Loading...</div>}>
            <SearchBar />
          </Suspense>

          {/* Links menu section  open={open}*/}
          <Suspense fallback={<div>Loading...</div>}>
            <Links />
          </Suspense>

          {/* user Login section */}
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>

          {/* cart logo section view*/}
          <Suspense fallback={<div>Loading...</div>}>
            <CartLogo />
          </Suspense>

          {/* mobile hamburger menu sections*/}
          <Suspense fallback={<div>Loading...</div>}>
            <MobilHamburger/>
          </Suspense>

        </div>
      </nav>
    </>
  );
};

export default NavBar;
// "use client"
// import { FaBars } from "react-icons/fa";
// import { useState } from "react";

import AppLogs from "./AppLogo/AppLogs";
import SearchBar  from "./SearchBar/SearchBar";
import Links from "./Links/Links";
import Login from "./Login/Login";
import CartLogo from "./CartLogo/CartLogo";
import MobilHamburger from "./MobilHamburger/MobilHamburger";

import "@/app/styles/homepage/navbar/navbar.scss";


const NavBar = () => {

  // const [open,setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="navbar">

          {/* App logo section */}
          <AppLogs/>

          {/* search bar */}
          <SearchBar />

          {/* Links menu section  open={open}*/}
          <Links/>

          {/* user Login section */}
          <Login />

          {/* cart logo section view*/}
          <CartLogo />

          {/* mobile hamburger menu sections*/}
          <MobilHamburger/>
          

        </div>

      </nav>
    </>
  );
};

export default NavBar;
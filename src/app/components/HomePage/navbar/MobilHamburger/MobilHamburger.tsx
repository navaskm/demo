"use client"
import { FaBars } from "react-icons/fa";
import { useState } from "react";

import Links from "../Links/Links";

//import { useMenuContext } from "../MenuContext/MenuContext";

const MobilHamburger = () => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="menu-icon" onClick={() => setOpen(!open)}>
      <FaBars className="fs-3"/>
      <Links open={open} />
    </div>
  )
}

export default MobilHamburger
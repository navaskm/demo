//"use client";

//import { useMenuContext } from "../MenuContext/MenuContext";

type Menu = {
  open? : boolean,
}
function Links({open}:Menu) {

 let toggleOpen = (open === true || open === false)? true : null;

  return(
    <div className="navbar-links">
      <ul className={`nav-link ${open? 'active':''}`}>
        <li><a href="">Home</a></li>
        <li><a href="">about</a></li>
        <li><a href="">contact</a></li>
      </ul>
    </div> 
  )
}

export default Links;
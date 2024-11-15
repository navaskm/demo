import "@/app/styles/homepage/navbar/navbar.scss";
import { Logo } from "./Logo/Logo";
import { SearchBar } from "./SearchBar/SearchBar";
import { Links } from "./Links/Links";

const NavBar = () => {
  return (
    <div className="col navbar" >
        <Logo/>
        <SearchBar/>
        <Links/>
        <Logo/>
    </div>
  )
}

export default NavBar;

import { CiSearch } from "react-icons/ci";
import "@/app/styles/homepage/navbar/navbar.scss";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input
        type="text" 
        placeholder="Search product"
      />
      <button>
        <CiSearch/>
      </button>
    </div>
  )
}

export default SearchBar;
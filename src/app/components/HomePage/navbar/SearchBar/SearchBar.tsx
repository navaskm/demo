import "@/app/styles/homepage/navbar/navbar.scss";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search product"
      />
    </div>
  )
}
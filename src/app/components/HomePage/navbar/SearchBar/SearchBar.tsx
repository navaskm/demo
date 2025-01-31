'use client';
import { CiSearch } from "react-icons/ci";
import { useState,useEffect } from "react";

import { fetchProduct,fetchScrollingProduct } from "@/app/DataFetching/productData";
import similarProducts from '@/app/API/similar-product.json';
import "@/app/styles/homepage/navbar/navbar.scss";

type Search = {
  id: number,
  name: string,
}

const SearchBar =  () => {

  const [scrolling, setScrolling] = useState([]);
  const [scrollingSearchData, setScrollingSearchData] = useState('');

  useEffect(()=> {

    // fetch scrolling product
    const getProducts = async ()=>{
      try {

        const homeProducts = await fetchProduct();
        const scrollingProducts  = await fetchScrollingProduct();
        setScrolling([...homeProducts, ...scrollingProducts,...similarProducts]);

      } catch (error) {
        console.error("Error fetching products:", error);
      }

    }
    getProducts();

  },[])

  const scrollingName = scrolling.filter((item:object)=>
    item.name.toLocaleLowerCase().includes(scrollingSearchData.toLocaleLowerCase())
  )

  return (
    <div className="searchbar-container">
      <input
        type="text" 
        placeholder="Search product"
        onChange={(e)=> setScrollingSearchData(e.target.value)}
      />
      <button>
        <CiSearch/>
      </button>

     {
      scrollingSearchData && scrollingName.length > 0 && (
        <div className="result-box">
          {
            scrollingName.map((user:Search) => (
              <ul key={user.id}>
                <li>{user.name}</li>
              </ul>
            ))
          }
        </div>
      )
     }

    </div>
  )
}

export default SearchBar;
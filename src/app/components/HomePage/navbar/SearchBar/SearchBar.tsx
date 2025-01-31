'use client';

import { CiSearch } from "react-icons/ci";
import { useState,useEffect } from "react";
import Link from "next/link";

import { fetchProduct,fetchScrollingProduct } from "@/app/DataFetching/productData";
import similarProducts from '@/app/API/similar-product.json';
import "@/app/styles/homepage/navbar/navbar.scss";

type Search = {
  id: number,
  name: string,
  image: string,
  size: string,
  priceCents: string,
  rating: string,
  madein: string,
  Feature: string,
  type: string,
  company: string,
}

const SearchBar =  () => {

  const [scrolling, setScrolling] = useState([]);
  const [searchData, setSearchData] = useState('');

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

  const productName = scrolling.filter((product:object)=>
    product.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
  )

  return (
    <div className="searchbar-container">
      <input
        type="text" 
        placeholder="Search product"
        onChange={(e)=> setSearchData(e.target.value)}
      />
      <button>
        <CiSearch/>
      </button>

     {
      searchData && productName.length > 0 && (
        <div className="result-box">
          {
            productName.map((product:Search) => (
              <ul key={product.id}>
                <Link
                  style={{textDecoration:"none"}}
                  href={{
                    pathname:"/components/SelectedPage",
                    query:{
                      name: encodeURIComponent(product.name),
                      priceCents: product.priceCents,
                      image: encodeURIComponent(product.image),
                      rating: product.rating,
                      id: product.id,
                      type: product.type,
                      company: encodeURIComponent(product.company),
                      madein: encodeURIComponent(product.madein),
                      Feature: encodeURIComponent(product.Feature),
                      size: product.size,
                    }
                  }}
                >
                  <li>{product.name}</li>
                </Link>
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
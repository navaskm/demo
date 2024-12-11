"use client";
import { useRouter } from "next/navigation";

type Products = {
  name: string,
  title:string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
}

const ClintSmallProduct = ({item}:{item:Products}) => {

  const router = useRouter();

  const handleNavigation = () => {
    router.push(
      `/components/SelectedPage?name=${encodeURIComponent(item.name)}&priceCents=${item.priceCents}&image=${encodeURIComponent(
        item.image
      )}&rating=${item.rating}&type=${item.type}&id=${item.id}`
    );
  };

  return (
    <>
      <img src={item.image} alt={item.name} onClick={handleNavigation}/>
    
      <div className='name-price-display'>
        <h6>{item.name}</h6>
        <div className='price-star-display'>
          <b><span>₹</span>{item.priceCents}</b>
          <p>{item.rating}&#9733;</p>
        </div>
      </div>
    </>
  )
}

export default ClintSmallProduct
"use client";
import Link from "next/link";

type Products = {
  id:string;
  name: string,
  image: string,
  priceCents: string,
  rating: string,
  type: string,
  keywords: string,
  offer: string,
  company: string,
  madein: string,
  Feature: string,
  size:string,
}


type BagsSports = {
  product : Products[],
  order: string,
}

function BagsSports({product,order}:BagsSports) {

  // scrolling left side
  const scrollLeft = () => {
    const scrollContainer = document.querySelector(`.scrolling-products-${order}`);

    if(scrollContainer){
      const scrollDistance = - (window.innerWidth-100)
      scrollContainer.scrollBy({left: scrollDistance, behavior: 'smooth'})
    }
  }
  
  // scrolling right side
  const scrollRight = () => {
    const scrollContainer = document.querySelector(`.scrolling-products-${order}`);

    if(scrollContainer){
      const scrollDistance = window.innerWidth-100
      scrollContainer.scrollBy({left: scrollDistance, behavior: 'smooth'})
    }
  }

  return (
    <div className="scrolling-product-container">

      <button className="scroll-button left" onClick={scrollLeft}>←</button>

        <div className={`scrolling-products-${order}`}>
          {
            product.map((item:Products) =>{
              return(
                <div  key={item.id}>

                  <Link 
                    style={
                      {
                        textDecoration:"none",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                      }
                    } 

                    href={{
                      pathname: "/components/SelectedPage",
                      query: {
                        name: encodeURIComponent(item.name),
                        priceCents: item.priceCents,
                        rating: item.rating,
                        image: encodeURIComponent(item.image),
                        company: encodeURIComponent(item.company),
                        madein: encodeURIComponent(item.madein),
                        Feature: encodeURIComponent(item.Feature),
                        size: item.size,
                      },
                    }}>
                  
                    <div className="image-wrapper">
                      <img src={item.image} alt={item.name} />
                      <h5>{item.name}</h5>
                      <div className="scrolling-image-offer">
                        <h4>{item.offer}</h4>
                      </div>
                    </div>
                    

                  </Link>
                  
                </div>
              )
            })
          }
        </div>

      <button className="scroll-button right" onClick={scrollRight}>→</button>

    </div>
  )
}

export default BagsSports
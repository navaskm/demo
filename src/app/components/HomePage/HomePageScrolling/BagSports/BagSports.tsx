"use client";

type Products = {
  id:string;
  name: string,
  image: string,
  priceCents: string,
  rating: string,
  type: string,
  keywords: string,
  offer: string,
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
          product.map((bag:Products) =>{
            return(
              <div  key={bag.id}> 
                <img src={bag.image} alt={bag.name} />
                <h5>{bag.name}</h5>
                <div><h4>{bag.offer}</h4></div>
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
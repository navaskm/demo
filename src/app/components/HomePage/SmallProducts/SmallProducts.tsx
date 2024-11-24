import "@/app/styles/homepage/smallproducts/smallproducts.scss";
import { fetchProduct } from "@/app/DataFetching/productData";

type Products = {
  name: string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
}

const SmallProducts = async () => {

  // small items
  const response = await fetchProduct();
  const productWatch = response.filter((product:Products) => product.type === 'watch');
  const productShoes = response.filter((product:Products) => product.type === 'shoes');
  const productForMens = response.filter((product:Products) => product.type === 'mens-clothes');
  const productForWomen = response.filter((product:Products) => product.type == 'women-clothes');
  const productJewelry = response.filter((product:Products) => product.type === 'Jewelry');
  const productSoundHub = response.filter((product:Products) => product.type === 'sound-hub');
  const productSunglass = response.filter((product:Products) => product.type === 'sunglass');
  const productToys = response.filter((product:Products) => product.type === 'toys');

  return(
    <div className="homepage-dynamic-small">
      
        {/* create watch */}
      <div className="parent-dynamic-images">

        <div className="title">
          <h3>Elevate Your Look with Timeless Watches</h3>
        </div>

        <div className="product-dynamic">
          {
            productWatch.map((watch:Products) =>{
              return(
                <div key={watch.id} className="inside-row">
                  <div className="image-name-display">
                    <img className="inside-row-of-image" src={watch.image} alt={watch.name}/>
                    <h6>{watch.name}</h6>
                  </div>
                  <div className="price-star-delivery-display">
                    <b><span>₹ </span>{watch.priceCents} </b>
                    <span className="rp-logo">{watch.rating}<span className="star-logo">&#9733;</span></span>
                    <p>free delivery</p>
                  </div>
                </div>
              )
            })
          }           
        </div>
      </div>


      {/* create shoes */}
      <div className="parent-dynamic-images">

        <div className="title">
          <h3>Walk in Style: Trendy Shoes for Every Taste</h3>
        </div>

        <div className="product-dynamic">
          {
            productShoes.map((shoes:Products) =>{
              return(
                <div key={shoes.id} className="inside-row">
                  <div className="image-name-display">
                    <img className="inside-row-of-image" src={shoes.image} alt={shoes.name}/>
                    <h6>{shoes.name}</h6>
                  </div>
                  <div className="price-star-delivery-display">
                    <b><span>₹ </span>{shoes.priceCents} </b>
                    <span className="rp-logo">{shoes.rating}<span className="star-logo">&#9733;</span></span>
                    <p>free delivery</p>
                  </div>
                </div>
              )
            })
          }           
        </div>
      </div>


      {/* create dress for mens */}
      <div className="parent-dynamic-images">

        <div className="title">
          <h3>Timeless Fashion for the Modern Man</h3>
        </div>

        <div className="product-dynamic">
          {
            productForMens.map((dress:Products) =>{
              return(
                <div key={dress.id} className="inside-row">
                  <div className="image-name-display">
                    <img className="inside-row-of-image" src={dress.image} alt={dress.name}/>
                    <h6>{dress.name}</h6>
                  </div>
                  <div className="price-star-delivery-display">
                    <b><span>₹ </span>{dress.priceCents} </b>
                    <span className="rp-logo">{dress.rating}<span className="star-logo">&#9733;</span></span>
                    <p>free delivery</p>
                  </div>
                </div>
              )
            })
          }           
        </div>
      </div>


      {/* create dress for women's */}
      <div className="parent-dynamic-images">

        <div className="title">
          <h3>Discover the Beauty of Women's Fashion</h3>
        </div>

        <div className="product-dynamic">
          {
            productForWomen.map((dress:Products) =>{
              return(
                <div key={dress.id} className="inside-row">
                  <div className="image-name-display">
                    <img className="inside-row-of-image" src={dress.image} alt={dress.name}/>
                    <h6>{dress.name}</h6>
                  </div>
                  <div className="price-star-delivery-display">
                    <b><span>₹ </span>{dress.priceCents} </b>
                    <span className="rp-logo">{dress.rating}<span className="star-logo">&#9733;</span></span>
                    <p>free delivery</p>
                  </div>
                </div>
              )
            })
          }           
        </div>
      </div>



      {/* create Jewelry*/}
      <div className="parent-dynamic-images">

        <div className="title">
          <h3>Timeless Elegance in Every Piece</h3>
        </div>

        <div className="product-dynamic">
          {
            productJewelry.map((jewelry:Products) =>{
              return(
                <div key={jewelry.id} className="inside-row">
                  <div className="image-name-display">
                    <img className="inside-row-of-image" src={jewelry.image} alt={jewelry.name}/>
                    <h6>{jewelry.name}</h6>
                  </div>
                  <div className="price-star-delivery-display">
                    <b><span>₹ </span>{jewelry.priceCents} </b>
                    <span className="rp-logo">{jewelry.rating}<span className="star-logo">&#9733;</span></span>
                    <p>free delivery</p>
                  </div>
                </div>
              )
            })
          }           
        </div>
      </div>


      {/* create SoundHub */}
      <div className="parent-dynamic-images">

        <div className="title">
          <h3>For the Love of Incredible Sound</h3>
        </div>

        <div className="product-dynamic">
          {
            productSoundHub.map((SoundHub:Products) =>{
              return(
                <div key={SoundHub.id} className="inside-row">
                  <div className="image-name-display">
                    <img className="inside-row-of-image" src={SoundHub.image} alt={SoundHub.name}/>
                    <h6>{SoundHub.name}</h6>
                  </div>
                  <div className="price-star-delivery-display">
                    <b><span>₹ </span>{SoundHub.priceCents} </b>
                    <span className="rp-logo">{SoundHub.rating}<span className="star-logo">&#9733;</span></span>
                    <p>free delivery</p>
                  </div>
                </div>
              )
            })
          }           
        </div>
      </div>


      {/* create Toys */}
      <div className="parent-dynamic-images hide-products">

        <div className="title">
          <h3>Fun and Learning Packed in Every Toy</h3>
        </div>

        <div className="product-dynamic">
          {
            productToys.map((toys:Products) =>{
              return(
                <div key={toys.id} className="inside-row">
                  <div className="image-name-display">
                    <img className="inside-row-of-image" src={toys.image} alt={toys.name}/>
                    <h6>{toys.name}</h6>
                  </div>
                  <div className="price-star-delivery-display">
                    <b><span>₹ </span>{toys.priceCents} </b>
                    <span className="rp-logo">{toys.rating}<span className="star-logo">&#9733;</span></span>
                    <p>free delivery</p>
                  </div>
                </div>
              )
            })
          }           
        </div>
      </div>


      {/* create Sunglass */}
      <div className="parent-dynamic-images hide-products">

        <div className="title">
          <h3>See the World Through Stylish Lenses</h3>
        </div>

        <div className="product-dynamic">
          {
            productSunglass.map((sunglass:Products) =>{
              return(
                <div key={sunglass.id} className="inside-row">
                  <div className="image-name-display">
                    <img className="inside-row-of-image" src={sunglass.image} alt={sunglass.name}/>
                    <h6>{sunglass.name}</h6>
                  </div>
                  <div className="price-star-delivery-display">
                    <b><span>₹ </span>{sunglass.priceCents} </b>
                    <span className="rp-logo">{sunglass.rating}<span className="star-logo">&#9733;</span></span>
                    <p>free delivery</p>
                  </div>
                </div>
              )
            })
          }           
        </div>
      </div>
    </div>

  )
}

export default SmallProducts;
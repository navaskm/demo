import '@/app/styles/homepage/smallProducts/smallproducts.scss';
import { fetchProduct } from "@/app/DataFetching/productData"

type Products = {
  name: string,
  image: string,
  rating: string,
  priceCents:string,
  type: string,
  keywords: string,
  id: number,
}

type ItemOne = {
  product?: string,
}

const response = await fetchProduct();
const productWatch = response.filter((watch:Products) => watch.type === 'watch');
const productShoes = response.filter((Shoes:Products) => Shoes.type === 'shoes');
const productForMens = response.filter((Mens:Products) => Mens.type === 'mens-clothes');
const productForWomen = response.filter((women:Products) => women.type == 'women-clothes');
const productJewelry = response.filter((jewelry:Products) => jewelry.type === 'Jewelry');
const productSoundHub = response.filter((soundHub:Products) => soundHub.type === 'sound-hub');
const productSunglass = response.filter((sunglass:Products) => sunglass.type === 'sunglass');
const productToys = response.filter((toys:Products) => toys.type === 'toys');

function SmallProducts({product}:ItemOne) {
  return product !== 'one'? (
    <div className="container-of-all-products row">

      {/* create watch*/}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3">
        <div className='title'>
          <h3>Elevate Your Look with Timeless Watches</h3>
        </div>
        
        <div className='product-body'>
          {
            productWatch.map((watch:Products) => {
              return (
                <div key={watch.id} className="product-details-display">
                  <img src={watch.image} alt={watch.name} />
                  <div className='name-price-display'>
                    <h6>{watch.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{watch.priceCents}</b>
                      <p>{watch.rating}&#9733;</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* create shoes  */}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3">
        <div className='title'>
          <h3>Walk in Style: Trendy Shoes for Every Taste</h3>
        </div>
        
        <div className='product-body'>
          {
            productShoes.map((shoes:Products) => {
              return (
                <div key={shoes.id} className="product-details-display">
                  <img src={shoes.image} alt={shoes.name} />
                  <div className='name-price-display'>
                    <h6>{shoes.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{shoes.priceCents}</b>
                      <p>{shoes.rating}&#9733;</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* create mens dress  */}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3">
        <div className='title'>
          <h3>Timeless Fashion for the Modern Man</h3>
        </div>
        
        <div className='product-body'>
          {
            productForMens.map((menDress:Products) => {
              return (
                <div key={menDress.id} className="product-details-display">
                  <img src={menDress.image} alt={menDress.name} />
                  <div className='name-price-display'>
                    <h6>{menDress.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{menDress.priceCents}</b>
                      <p>{menDress.rating}&#9733;</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* create women dress */}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3">
        <div className='title'>
          <h3>Discover the Beauty of Women's Fashion</h3>
        </div>
        
        <div className='product-body'>
          {
            productForWomen.map((womenDress:Products) => {
              return (
                <div key={womenDress.id} className="product-details-display">
                  <img src={womenDress.image} alt={womenDress.name} />
                  <div className='name-price-display'>
                    <h6>{womenDress.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{womenDress.priceCents}</b>
                      <p>{womenDress.rating}&#9733;</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* create Jewelry */}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3">
        <div className='title'>
          <h3>Timeless Elegance in Every Piece</h3>
        </div>
        
        <div className='product-body'>
          {
            productJewelry.map((Jewelry:Products) => {
              return (
                <div key={Jewelry.id} className="product-details-display">
                  <img src={Jewelry.image} alt={Jewelry.name} />
                  <div className='name-price-display'>
                    <h6>{Jewelry.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{Jewelry.priceCents}</b>
                      <p>{Jewelry.rating}&#9733;</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* create SoundHub */}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3">
        <div className='title'>
          <h3>For the Love of Incredible Sound</h3>
        </div>
        
        <div className='product-body'>
          {
            productSoundHub.map((SoundHub:Products) => {
              return (
                <div key={SoundHub.id} className="product-details-display">
                  <img src={SoundHub.image} alt={SoundHub.name} />
                  <div className='name-price-display'>
                    <h6>{SoundHub.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{SoundHub.priceCents}</b>
                      <p>{SoundHub.rating}&#9733;</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* create Sunglass */}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3 only-large-device">
        <div className='title'>
          <h3>See the World Through Stylish Lenses</h3>
        </div>
        
        <div className='product-body'>
          {
            productSunglass.map((Sunglass:Products) => {
              return (
                <div key={Sunglass.id} className="product-details-display">
                  <img src={Sunglass.image} alt={Sunglass.name} />
                  <div className='name-price-display'>
                    <h6>{Sunglass.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{Sunglass.priceCents}</b>
                      <p>{Sunglass.rating}&#9733;</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* create Toys */}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3 only-large-device">
        <div className='title'>
          <h3>Fun and Learning Packed in Every Toy</h3>
        </div>
        
        <div className='product-body'>
          {
            productToys.map((Toys:Products) => {
              return (
                <div key={Toys.id} className="product-details-display">
                  <img src={Toys.image} alt={Toys.name} />
                  <div className='name-price-display'>
                    <h6>{Toys.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{Toys.priceCents}</b>
                      <p>{Toys.rating}&#9733;</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


    </div>
  ):(
    // container-of-all-products 
    <div className="row">

          {/* create watch*/}
      <div className="container-of-one-product col-6 col-md-4 col-xl-3">
        <div className='title'>
          <h3>Elevate Your Look with Timeless Watches</h3>
        </div>
        
        <div className='product-body'>
          {
            productWatch.map((watch:Products) => {
              return (
                <div key={watch.id} className="product-details-display">
                  <img src={watch.image} alt={watch.name} />
                  <div className='name-price-display'>
                    <h6>{watch.name}</h6>
                    <div className='price-star-display'>
                      <b><span>₹</span>{watch.priceCents}</b>
                      <p>{watch.rating}&#9733;</p>
                    </div>
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

export default SmallProducts
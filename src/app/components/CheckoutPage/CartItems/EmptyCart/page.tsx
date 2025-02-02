import Link from "next/link"
import Image from "next/image"

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
        <Image src="/EmptyCart/emptyImage.png" alt="" width={500} height={300}/>
        <h5>Your cart is empty!</h5>
        <p>Add items to it now.</p>
        <Link href="/" style={{textDecoration:"none",color:"white"}}>Start Shopping</Link>
    </div>
  )
}

export default EmptyCart
import Link from "next/link"

const TopBarOfCartPage = () => {
  return (
    <div className="top-bar">
      <Link href='/'>
         <img src="/Logo/app-logo.png"/>
      </Link>
      <h1>
        Check Out 8 items
      </h1>
    </div>
  )
}

export default TopBarOfCartPage

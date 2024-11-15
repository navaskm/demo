import Link from "next/link"
import "@/app/styles/homepage/navbar/navbar.scss";

export const Links = () => {
  return (
    <div className="navbar-links">
      <nav>
        <ul  className='links'>
          <li>
            <Link href='/' >Home</Link>
          </li>
          <li>
            <Link href='/about' >About</Link>
          </li>
          <li>
            <Link href='/contact' >Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
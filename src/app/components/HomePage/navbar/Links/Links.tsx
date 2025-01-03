import Link from "next/link";

type Menu = {
  open? : boolean,
}
function Links({open}:Menu) {
  return(
    <ul className={`nav-links ${open? 'active':''}`}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/components/SelectedPage">about</Link></li>
      <li><Link href="/components/SelectedPage">contact</Link></li>
    </ul>
  )
}

export default Links;
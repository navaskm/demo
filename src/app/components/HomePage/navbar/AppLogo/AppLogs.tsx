import "@/app/styles/homepage/navbar/navbar.scss";
import Link from "next/link";

const AppLogs = () => {
  return(
    <Link href="/" className="app-logo-link"> 
      <img src="/Logo/app-logo.png" alt="" className="app-logo" style={{backgroundColor:"black"}} />
    </Link>
  )
}

export default AppLogs
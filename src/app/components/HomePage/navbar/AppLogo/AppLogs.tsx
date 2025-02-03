import Link from "next/link";
import "@/app/styles/homepage/navbar/navbar.scss";

const AppLogs =   () => {
  return(
    <Link href="/" className="app-logo-link" > 
      <img src="/Logo/app-logo.png" alt="" className="app-logo"/>
    </Link>
  )
}

export default AppLogs
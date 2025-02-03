import Link from "next/link";
import "@/app/styles/homepage/navbar/navbar.scss";
import Image from "next/image";

const AppLogs =   () => {
  return(
    <Link href="/" className="app-logo-link" > 
      <Image src="/Logo/app-logo.png" alt="" className="app-logo" fill/>
    </Link>
  )
}

export default AppLogs
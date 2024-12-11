import "@/app/styles/homepage/navbar/navbar.scss";
import Link from "next/link";

const AppLogs = () => {
  return (
    <div className="app-logo">
      <Link href="/">
        <img src="/Logo/app-logo.png" alt="" />
      </Link>
    </div>
  )
}

export default AppLogs
import { SignInButton,UserButton,SignedIn,SignedOut } from "@clerk/nextjs"
//<button title="Login" className="login-button">Login</button>
const Login = () => {
  return(
    <>
      <SignedIn>
        <UserButton/>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" title="Login" className="login-button"/>
      </SignedOut>
    </>
  )
}

export default Login
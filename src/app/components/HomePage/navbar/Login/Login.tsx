import { SignInButton,UserButton,SignedIn,SignedOut } from "@clerk/nextjs"
const Login = () => {
  return(
    <>
      <SignedIn>
        <UserButton/>
      </SignedIn>
      <SignedOut>
      <SignInButton mode="modal">
          <button className="login-button">Login</button>
        </SignInButton>
      </SignedOut>
    </>
  )
}

export default Login
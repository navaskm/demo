import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const NavbarSkeleton = () => {
  return (
    <div style={{width:"100%",margin:"0",padding:"0"}}>
      <Skeleton count={3}/>
    </div>
  )
}

export default NavbarSkeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AppLogSkeleton = () => {
  return (
    <div>
      <Skeleton style={{width:"50px",height:"50px"}}/>
    </div>
  )
}

export default AppLogSkeleton
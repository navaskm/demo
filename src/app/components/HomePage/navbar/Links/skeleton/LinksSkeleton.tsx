import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '@/app/components/HomePage/navbar/Links/skeleton/skeleton.scss'

const LinksSkeleton = () => {
  return (
    <ul className='link-skeleton'>
      <Skeleton/>
    </ul>
  )
}

export default LinksSkeleton
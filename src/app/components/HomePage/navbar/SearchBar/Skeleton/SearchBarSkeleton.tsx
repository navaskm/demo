import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '@/app/components/HomePage/navbar/SearchBar/Skeleton/skeleton.scss';

const SearchBarSkeleton = () => {
  return (
    <div className='search-bar-skeleton'>
      <Skeleton/>
    </div>
  )
}

export default SearchBarSkeleton
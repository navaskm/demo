import Link from "next/link"

type Products = {
  name: string,
  image: string,
  date: string,
}

const TrackingPage= ({ searchParams }: { searchParams: Products }) => {

  return (
    <div>
      <h2>{decodeURIComponent(searchParams.date)}</h2>
      <p>{decodeURIComponent(searchParams.name)}</p>
      <Link href='/components/OrderPage'>View All Orders</Link>
      <img src={decodeURIComponent(searchParams.image)} alt="" />
    </div>
  )
}

export default TrackingPage;
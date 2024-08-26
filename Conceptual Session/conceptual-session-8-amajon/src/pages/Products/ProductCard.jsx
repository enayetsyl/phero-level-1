import { Link } from "react-router-dom"

export default function ProductCard({product}) {
  console.log(product)
  const{images, brand, price, rating, title, id} = product
  console.log(id)
  return (
    <div className="rounded-lg p-5 bg-white shadow-lg flex flex-col">
      <div className="flex-grow">
      <img className="h-[250px] w-full mx-auto" src={images[0]} alt="" />
      <h1 className="text-3xl font-bold py-8">{title}</h1>
      <h2 className="text-2xl">Rating: <span className="rounded-lg bg-gray-300 px-3 py-1">{rating}</span></h2>
      </div>
      <div className="flex justify-between items-center pt-5 pb-10">
      <h1 className="text-3xl font-bold ">Price:  {price}</h1>
      <Link to={`/product/${id}`}>
      <button className="text-white ml-10 bg-blue-800 font-bold px-8 py-4 rounded-lg text-xl">View Details</button>

      </Link>
      </div>
    </div>
  )
}

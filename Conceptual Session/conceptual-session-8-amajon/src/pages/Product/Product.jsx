import { useLoaderData } from "react-router-dom"

export default function Product() {
  
  const product = useLoaderData();
  console.log(product)
  const {title, rating, images, price, stock, id} = product;
  return (
    <div className="rounded-lg p-5 bg-white shadow-xl flex flex-col my-16 w-[50%] mx-auto ">
    <div className="flex-grow">
    <img className="mx-auto" src={images[0]} alt="" />
    <h1 className="text-3xl font-bold py-8">{title}</h1>
    <h2 className="text-2xl">Rating: <span className="rounded-lg bg-gray-300 px-3 py-1">{rating}</span></h2>
    </div>
    <div className="flex justify-between items-center pt-5 pb-10">
    <h1 className="text-3xl font-bold ">Price:  {price}</h1>
    
    <button className="text-white ml-10 bg-blue-800 font-bold px-8 py-4 rounded-lg text-xl">Add to cart</button>
   
    </div>
  </div>
  )
}

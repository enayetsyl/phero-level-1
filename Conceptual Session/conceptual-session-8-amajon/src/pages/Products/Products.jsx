import { useLoaderData } from "react-router-dom"
import ProductCard from "./ProductCard";

export default function Products() {
  const {products} = useLoaderData();
 
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 my-20">
        {
          products?.map(product => <ProductCard key={product.key} product={product}></ProductCard>)
        }    
    </div>
  )
}


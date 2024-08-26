import Phone from "../Header/Phone"


export default function Phones({phones}) {

  // const {brand_name, id, image, phone_name, price, rating}= phones || {}
  // console.log(phones)
  
  return (
    <div>
        <h1 className="py-4 text-center">Our phones Collections</h1>      
        <div>
          {phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
          
          }
        </div>
    </div>
  )
}

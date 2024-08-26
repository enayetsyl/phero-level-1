import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav";



export default function MainLayout() {
  return (
    <div >
        <div className="max-w-[1300px] mx-auto">
        <Nav></Nav>
        <div className="py-5">
        <Outlet></Outlet></div>      
        </div>
    </div>
  )
}

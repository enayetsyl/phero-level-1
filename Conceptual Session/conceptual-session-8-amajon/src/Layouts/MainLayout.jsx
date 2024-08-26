import {  NavLink, Outlet } from 'react-router-dom'
import Footer from '../pages/Footer/Footer'


export default function MainLayout() {
  return (
    <div >
      <div className='flex justify-between px-10 py-7 shadow-lg'>
      <h1 className='text-2xl font-bold'>Amajon</h1>
      <nav>
        <ul className='flex justify-between gap-5'>
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-400 rounded-lg p-4" : ""
  }
>
  Home
</NavLink>
        <NavLink
  to="/products"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-400 rounded-lg p-4" : ""
  }
>
  Products
</NavLink>
        <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-400 rounded-lg p-4" : ""
  }
>
  Dashboard
</NavLink>
             </ul>
      </nav>
      </div>
      <div className='min-h-screen'><Outlet></Outlet></div>
     <Footer></Footer>
    </div>
  )
}

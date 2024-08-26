
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import Home from "../pages/Home/Home"
import Products from "../pages/Products/Products"
import Dashboard from "../pages/Dashboard/Dashboard"
import Product from "../pages/Product/Product"
import DashboardLayout from "../Layouts/DashboardLayout"
import Profile from "../pages/Profile/Profile"
import EditProfile from "../pages/EditProfile/EditProfile"

const myCreatedRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/products',
        element: <Products></Products>,
        loader: () => fetch('https://dummyjson.com/products')
      },
      {
        path: '/product/:id',
        element: <Product></Product>,
        loader:({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children:[
          {
              path:'/dashboard',
              element:<Dashboard></Dashboard>,
          },
          {
            path:'/dashboard/profile',
            element: <Profile></Profile>,
        },
        {
          path:'/dashboard/editProfile',
          element:<EditProfile></EditProfile>,
      },
        ]
      }
    ]
  },
])

export default myCreatedRouter;
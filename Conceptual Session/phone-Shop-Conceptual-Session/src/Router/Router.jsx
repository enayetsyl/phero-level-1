import { createBrowserRouter } from "react-router-dom"

import Home from "../Pages/Home"
import Favorites from "../Pages/favorites"
import Login from "../Pages/login"
import MainLayout from "../Layout/MainLayout"

const Router = createBrowserRouter ([
  {
    path: '/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('phones.json')
      },
      {
        path: '/favorites',
        element: <Favorites></Favorites>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
    ]
  }
])


export default Router
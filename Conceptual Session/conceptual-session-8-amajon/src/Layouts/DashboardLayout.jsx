import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex justify-center gap-5 m-5">
      <div className="w-[20%] bg-yellow-100 shadow-lg p-5">
      <ul>
      <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-400 rounded-lg p-4" : ""
  }
>
DashBoard
</NavLink>
      <NavLink
  to="/dashboard/profile"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-400 rounded-lg p-4" : ""
  }
>
Profile
</NavLink>
      <NavLink
  to="/dashboard/editProfile"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-400 rounded-lg p-4" : ""
  }
>
EditProfile
</NavLink>

        
      </ul>

      </div>

      <div className="w-[80%] ">
      <Outlet></Outlet>
      </div>
    </div>
  )
}

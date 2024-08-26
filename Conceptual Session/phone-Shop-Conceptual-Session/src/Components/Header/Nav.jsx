import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 shadow-lg">
        <h1>Phone Shop</h1>
        <div>
          <ul className="flex gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-bold underline"
                    : ""
                }
              >
                Home
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-bold underline"
                    : ""
                }
              >
                Favorites
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-bold underline"
                    : ""
                }
              >
                Login
              </NavLink>
              
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

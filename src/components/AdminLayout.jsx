import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <nav className="flex justify-start items-center px-6 py-4 bg-black/40 backdrop-blur-md shadow-lg">
        <div className="flex gap-6 text-lg">
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Income
          </NavLink>
          <NavLink
            to="allcars"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Cars
          </NavLink>
          <NavLink
            to="review"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            Review
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminLayout;

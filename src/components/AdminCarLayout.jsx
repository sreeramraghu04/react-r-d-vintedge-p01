import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminCarLayout = () => {
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
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : "text-purple-300"
            }
          >
            photos
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminCarLayout;

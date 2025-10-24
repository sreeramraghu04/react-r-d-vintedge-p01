import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md shadow-lg">
      <h1 className="text-2xl font-bold text-purple-400">VintEdge</h1>

      <div className="flex gap-6 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-green-500" : "text-purple-300"
          }
        >
          Home
        </NavLink>

        {isLoggedIn ? (
          <div className="flex gap-4">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "underline text-green-500" : "text-purple-300"
              }
            >
              Admin
            </NavLink>
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={login} className="text-red-500">
            Login
          </button>
        )}

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline text-green-500" : "text-purple-300"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

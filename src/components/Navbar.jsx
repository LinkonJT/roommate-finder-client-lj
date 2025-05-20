import React from "react";
import logo from '../assets/logo-rf.png'

const Navbar = () => {
  return (
    <div data-theme="abyss">
      <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Find Roommate</a>
              </li>
              <li>
                <a>My Listings</a>
              </li>

              <li>
                <a>Log Out</a>
              </li>
            </ul>
          </div>
          <img src={logo} className="w-10 rounded-xl" alt="" />
          <a className="md:btn btn-ghost btn text-sm md:text-xl hover:bg-accent hidden md:block items-center">
            Roommate
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
            <li>
              <a>Find Roommate</a>
            </li>
            <li>
              <a>My Listings</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <button className="btn hover:bg-accent text-sm md:text-lg md:w-16 w-14  ">Login</button>
          <button className="btn hover:bg-accent text-sm w-15 md:text-lg md:w-19">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

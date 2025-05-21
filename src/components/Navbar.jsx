import React, { use } from "react";
import logo from "../assets/logo-rf.png";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import defaultProPic from "../assets/userphoto.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    
      
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, LogOut!",
        }).then((result) => {
          if (result.isConfirmed) {
            logOut().then(()=>{
               Swal.fire({
              title: "LogOut successful",
              // text: "Your file has been deleted.",
              icon: "success",
            });
            })
           
          }
        
      })
      .catch((error) => {
        console.error("LogOut error:", error.message);
        Swal.fire({
          icon: "error",
          title: "LogOut failed",
          text: error.message,
        });
      });
  };

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
                <NavLink to="./">Home</NavLink>
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
          <div className="flex justify-center items-center">
            <span>
              {" "}
              <img src={logo} className="w-10 rounded-xl" alt="" />
            </span>
            <a className="md:btn btn-ghost btn text-sm md:text-xl hover:bg-accent hidden md:block items-center">
              Roommate
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="./">Home</NavLink>
            </li>

            <li>
              <a>Find Roommate</a>
            </li>
            <li>
              <a>My Listings</a>
            </li>
          </ul>
        </div>

        {/*  user is logged in =  (1) show the user photoURL, (2)hover over the image it will show the displayName, (3) And it will show the “Log out” button*/}

        <div className="navbar-end flex gap-2">
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom flex"
                data-tip={user.displayName || "no name"}>
                <img
                  className="w-8 rounded-full border"
                  src={user.photoURL || defaultProPic}
                  alt=""
                />

                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline hover:bg-accent ml-2">
                  Log out
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn hover:bg-accent text-sm btn-outline md:text-lg md:w-16 w-14  ">
                {" "}
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="btn hover:bg-accent btn-outline text-sm w-15 md:text-lg md:w-19">
                Signup
              </NavLink>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

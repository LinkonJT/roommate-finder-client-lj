import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

const Signup = () => {
  return (
    
      <div className="py-5">
        <h1 className="text-xl md:text-3xl font-bold text-center">Signup now!</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your name"
                />
                {/* photo URL */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  name="photo"
                  placeholder="Photo URL"
                />
                {/* email */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">SignUp</button>

                <div className="space-y-3">
                  <button className="btn bg-base-100 btn-outline w-full">
                    <FcGoogle size={24} /> Login with Google
                  </button>
                  <p className="font-semibold text-center">
                    Already Have An Account?{" "}
                    <NavLink
                      className="text-blue-700 hover:underline"
                      to="/login">
                      Login
                    </NavLink>
                  </p>
                </div>
              </fieldset>
            </div>
          </div>
      </div>
    
  );
};

export default Signup;

import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const Signup = () => {
const {createUser, logOut, signinWithGoogle} = use(AuthContext);
console.log(createUser)

const navigate = useNavigate()


const handleSignup= (e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
const {email, password, name, photoURL } = Object.fromEntries(formData.entries());
console.log(email, password, name, photoURL)


/*** Password validation *****/

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasMinLength = password.length >= 6;

  if (!hasUppercase || !hasLowercase || !hasMinLength) {
    Swal.fire({
      icon: "error",
      title: "Weak Password",
       html: "Password must contain at least:<br>- One uppercase letter<br>- One lowercase letter<br>- Minimum 6 characters",
       
    });
    return;
  }

/**Calling createUser function */
createUser(email, password)
.then((result)=>{
const createdUser = result.user;
console.log("Firebase user created",createdUser);



// return logOut()
// })

return updateProfile(createdUser, {
        displayName: name,
        photoURL: photoURL,
      })
    }).then(()=>{
    Swal.fire({
          icon: "success",
          title: "Created User, Signup successful",
          timer: 1500,
          showConfirmButton: false,
        });
 navigate('/')
})

.catch((error) => {
        console.error("Signup error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Signup failed",
          text: error.message,
        });
      })

}

/***********Start: handle Google Sign In ****** */
const handleGoogleLogin = () => {
    signinWithGoogle() // This function comes from your AuthContext
        .then(result => {
            // Handle success (redirect, show message)
            console.log("Google signed in user:", result.user);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Google Login Successful!",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate('/');
        })
        .catch(error => {
            // Handle errors (show error message)
            console.error("Google Login error:", error.message);
            Swal.fire({
                icon: "error",
                title: "Google Login Failed",
                text: error.message,
            });
        });
};

  return (
    <div>
      <form onSubmit={handleSignup} className="py-5">
        <h1 className="text-xl md:text-3xl font-bold text-center">
          Signup now!
        </h1>
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
                name="photoURL"
                placeholder="Photo URL"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">SignUp</button>

              <div className="space-y-3">
                <button onClick={handleGoogleLogin} type="button" className="btn bg-base-100 btn-outline w-full">
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
      </form>
    </div>
  );
};


export default Signup;

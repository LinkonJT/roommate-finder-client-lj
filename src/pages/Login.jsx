import React, { use} from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {

const {signinUser, signinWithGoogle} = use(AuthContext);
console.log(signinUser);

const navigate = useNavigate();
/************Start: Handle Email Password login */
const handleSignin = e =>{
  e.preventDefault();

   const form = e.target;
    // const email = form.email.value;
    // const password = form.password.value;
    // console.log(email, password);
const formData = new FormData(form)
    const {email, password} = Object.fromEntries(formData.entries())


/** password validation usdin RegExp */

const isValidPassword =  /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
if(!isValidPassword){
    Swal.fire({
        icon: "error",
        title: "Password Invalid",
        html:
          "Password must contain at least:<br>- One uppercase letter<br>- One lowercase letter,<br>- Minimum 6 characters",
      });
      return;
}

/****calling signinUser function */
    signinUser(email, password)
    .then((result)=>{
console.log(result.user);
const signinInfo = {
  email,
  lastSignInTime: result.user?.metadata?.lastSignInTime

}
 Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successFull",
                showConfirmButton: false,
                timer: 1500,
              });
navigate('/')
    }).catch((error)=>{
            console.log(error);
            });
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
            <form onSubmit={handleSignin } className="py-5">
        <h1 className="text-xl md:text-3xl font-bold text-center">Login now!</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
              <fieldset className="fieldset">
               
                {/* email */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>

              </fieldset>
              <div className="space-y-3">
                  <button onClick={handleGoogleLogin} type='button' className="btn bg-base-100 btn-outline w-full">
                    <FcGoogle size={24} /> Login with Google
                  </button>
                  <p className="font-semibold text-center">
                    Don't Have An Account?{" "}
                    <NavLink
                      className="text-blue-700 hover:underline"
                      to="/signup">
                      Signup
                    </NavLink>
                  </p>
                </div>
            </div>
          </div>
          
      </form>
      
      </div>
    
    );
}


export default Login;
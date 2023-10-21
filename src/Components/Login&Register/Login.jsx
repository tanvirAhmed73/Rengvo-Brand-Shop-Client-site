import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [successLogin, setSuccessLogin] = useState("");
  const provider = new GoogleAuthProvider();

  // login with google handle
  const handleGoogleLogin = () =>{

    // reset error
    setLoginError("");
    // reset login
    setSuccessLogin("");

    signInWithPopup(auth, provider)
      .then((result) => {
        setSuccessLogin("Login successfully!");
        navigate('/home')
      })
      .catch((error) => {
        setLoginError("Invalid Gmail Or Password");
      });
    
  };




  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate();
  //   login with gmail password handle
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset error
    setLoginError("");
    // reset login
    setSuccessLogin("");

    



    signInUser(email, password)
      .then((result) => {
        // Signed in
        setSuccessLogin("Login successfully!");
        e.target.reset();
        navigate('/home')
        // ...
      })
      .catch((error) => {
        setLoginError(" Gmail & Password Does Not Exist");
      });
  };
  


  return (
    <div className="lg:w-4/5 mx-auto">
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className=" text-5xl font-bold text-white">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign in</button>
            </div>


            <NavLink to={"/signup"}>
              Create An Account?
            </NavLink>
          </form>
            {/* signUp with google button */}
            <div onClick={handleGoogleLogin} className="flex justify-center items-center">
              <button  className="mr-1">Sign In With</button>
              <button>
                <FcGoogle />
              </button>
            </div>

          {
            loginError && <p className="text-center text-red-700">{loginError}</p>}
            {
            successLogin && 
              <p className="text-center text-green-700">{successLogin}</p>
            }


        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
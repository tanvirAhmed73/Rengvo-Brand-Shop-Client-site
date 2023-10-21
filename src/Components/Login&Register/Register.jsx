import auth from "../../../firebase.init";
// import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [successRegistration, setSuccessRegistration] = useState('');
    const navigate = useNavigate();

    const {createUser} = useContext(AuthContext);


  //   create new user with gmail
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // reset error
    setRegisterError('');
    // reset succesecreate message
    setSuccessRegistration('');
    
    if(password.length < 6){
        setRegisterError('Password should be at least 6 characters');
        return;
    }
    else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
      setRegisterError('YOur password should have at least six Characters,One Upper Case, & Special character');
      return;
    }
    
    
    createUser(email,password)
      .then((result) => {
        // Signed up
        e.target.reset()
        setSuccessRegistration('User create successfully');
        // ...
      })
      .catch((error) => {
        setRegisterError('Gmail Already Used');
        // ..
      });
  }

  




  return (
    <div className="lg:w-4/5 mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className=" text-5xl font-bold text-white">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <NavLink to={'/login'}>Already Have an Account? Login</NavLink>
              

             
            </form>

            {
                    registerError && <p className="ml-8 text-red-700">{registerError}</p>
                }
                {
                    successRegistration && <p className="ml-8 text-green-700">{successRegistration}</p>
                }



          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
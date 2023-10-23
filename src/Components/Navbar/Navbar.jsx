import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BiSolidUserCircle } from 'react-icons/bi';


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }



  return (
    <div className="navbar bg-green-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/addProduct">Add Product</Link>
            </li>
            <li>
              <Link to="/mycart">My Cart</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-sm lg:text-xl">Rengvo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/addProduct">Add Product</Link>
          </li>
          <li>
            <Link to="/addcart">My Cart</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">

      {
            user? <>
                <span className="">{<BiSolidUserCircle></BiSolidUserCircle>}</span>
                <span className="mr-3 text-sm">{user.email}</span>
                <NavLink to={'/home'}><a onClick={handleLogout} className="btn bg-white text-purple-600">Sign out</a></NavLink>
            </>
            : <NavLink to={'/login'}><a className="btn bg-white text-purple-600">Login/Registration</a></NavLink>
          }



      </div>
    </div>
  );
};

export default Navbar;

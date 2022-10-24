import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const Navbar = () => {

  const {user,signout} = useContext(UserContext)
  const handleSignOut = (e) => {
    e.preventDefault();
    signout()
    .then(result => console.log(result))
    .catch(error => console.log(error));

  }
  console.log(user)

  return (
    <section className="navbar bg-slate-200 min-h-[10vh]">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              {/* Hamburger Menu */}
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
            </div>

            {/* Logo */}
            <Link to='/' className="normal-case text-3xl font-bold">StudyCation</Link>

          </div>


        {/* Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">

              <li className="font-semibold text-lg">
                <Link to='/courses'>Courses</Link>
              </li>

              <li className="font-semibold text-lg"><Link to='/faq'>FAQ</Link></li>
              <li className="font-semibold text-lg"><Link to='/blog'>Blog</Link></li>


              <li className="font-semibold text-lg">

              <div className="form-control">

                  <label className="label cursor-pointer">
                    <span className="label-text mr-3">Light</span> 
                    <input type="checkbox" className="toggle" />
                  </label>

              </div>

              </li>
            </ul>
          </div>

          {/* Menu end */}



          {/* Accout status */}
          <div className="navbar-end">
            {user?.email}
            <Link to='/login' className="btn btn-outline">Login</Link>
            <Link to='/signup' className="btn ml-4">Sign up</Link>
            <button onClick={handleSignOut} className="btn btn-error">Sign out</button>
          </div>
          {/* Accout status end */}


        </div>
      </div>
    </section>
  );
};

export default Navbar;

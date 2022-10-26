import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const Navbar = () => {

  const [theme, setTheme] = useState('Light');
  const handleTheme = () => {
    setTheme(theme === 'Light'? 'Dark' : 'Light');
    
  }


  const { user, signout } = useContext(UserContext);
  const handleSignOut = (e) => {
    e.preventDefault();
    signout()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  

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
            <Link to="/" className="normal-case sm:text-3xl text-xl font-bold">
              StudyCation
            </Link>
          </div>

          {/* Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="font-semibold text-lg">
                <Link to="/courses">Courses</Link>
              </li>

              <li className="font-semibold text-lg">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="font-semibold text-lg">
                <Link to="/blog">Blog</Link>
              </li>

              <li className="font-semibold text-lg">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text mr-3">
                    {theme}
                    </span>
                    <input onClick={handleTheme} type="checkbox" className="toggle" />
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* Menu end */}

          {/* Accout status */}
          <div className="navbar-end">
            {user ? (
              <>
              
              <img title={user?.displayName} className='w-[50px] mr-4 rounded-full' src={user?.photoURL} alt="User image" />
                <button onClick={handleSignOut} className="btn btn-error hover">
                Sign out
              </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline">
                  Login
                </Link>
                <Link to="/signup" className="btn ml-4">
                  Sign up
                </Link>
              </>
            )}
          </div>
          {/* Accout status end */}
        </div>
      </div>
    </section>
  );
};

export default Navbar;

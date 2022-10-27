import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import Logo from '../../assets/image/logo.png'
import './Navbar.css'

const Navbar = () => {

  const [theme, setTheme] = useState('Light');
  const [dropdown, setDropdown] = useState(true)
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
  
  const hanldeHamburgerMenu = () => {
    setDropdown(!dropdown)
  }

  return (
    <section className="navbar bg-blue-500 text-white  min-h-[10vh]">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div onClick={hanldeHamburgerMenu} className={`dropdown`}>
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
            <Link to="/" className="normal-case flex items-center sm:text-3xl text-xl font-bold">
             <img className="w-14 mr-2" src={Logo} alt="" /> <span className="sm:block hidden">StudyCation</span>
            </Link>
          </div>

          {/* Responsive menu */}
<div className={ `top-24 left-4 z-[99999] absolute ${dropdown ? 'show__dropdown': 'hide__dropdown'}`}>
<ul className="menu bg-blue-500    text-white w-56 rounded-box shadow-2xl">
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
                    <span className="label-text mr-3 text-white">
                    {theme}
                    </span>
                    <input onClick={handleTheme} type="checkbox" className="toggle" />
                  </label>
                </div>
              </li>
</ul>
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
                    <span className="label-text text-white mr-3">
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

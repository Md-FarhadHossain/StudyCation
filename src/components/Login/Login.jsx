import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-base-200 min-h-[90vh]">
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex flex-col">
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form className="card-body">

                {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>


                {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>

                
              </div>


              {/* Login Button */}
              <label className="label mt-5">
                   <div className="">
                   <span className="text-black">Don't have an accout? </span><Link className="link link-hover text-blue-500" to='/signup'> Sign up here</Link>
                   </div>
                </label>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

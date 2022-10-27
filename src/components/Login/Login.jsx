import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import googleIcon from "../../assets/image/google.png";
import githubIcon from "../../assets/image/github.png";
import toast, { Toaster } from 'react-hot-toast';



const Login = () => {

    const [error, setError] = useState('')

    

    const {user, signinWithEmailPassword,signinWithGoogle,siginWithGithub} = useContext(UserContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    
  

    const handleFormSubmit = (e) => { 
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      
      signinWithEmailPassword(email, password)
      .then(result => {
        console.log(result);
        toast.success('Successfully Login!')
        navigate(from, {replace: true});
        
      })
      .catch(error => {
        console.log(error)
        toast.error(error.message)
        setError(error.message)
      })
      
      console.log(user);
  
    }
    
    const handleGoogleSignIn = (e) => {
      e.preventDefault();
      signinWithGoogle()
      .then((result) => {
        toast.success('Successfully Login!')
        navigate(from, {replace: true});
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message)
      });
    }
    const handleGithubSignIn = (e) => {
      e.preventDefault();
      siginWithGithub()
        .then((result) => {
          toast.success('Successfully Login!')
          navigate(from, { replace: true });
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message)
        });
    }
    

  return (
    <section className="bg-base-200 min-h-[90vh]">
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex flex-col">
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handleFormSubmit} className="card-body">

                {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>


                {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>

                <div>
                  <span className="text-error">{error}</span>
                </div>

                
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

          <div className="form-control w-full">
              <button onClick={handleGoogleSignIn} className="btn bg-blue-400 border-none mb-4">
                <span className="mr-3">
                  <img
                    className="w-[30px] h-[30px] bg-white p-1 rounded"
                    src={googleIcon}
                    alt="google icon"
                  />
                </span>
                Login with Google
              </button>

              <button
                onClick={handleGithubSignIn}
                className="btn border-none"
              >
                <span className="mr-3">
                  <img
                    className="w-[30px] h-[30px] bg-white p-1 rounded"
                    src={githubIcon}
                    alt="google icon"
                  />
                </span>
                Login with Github
              </button>
            </div>

        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Login;

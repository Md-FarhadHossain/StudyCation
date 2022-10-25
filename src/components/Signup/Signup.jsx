import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import googleIcon from "../../assets/image/google.png";

const Signup = () => {
  const { signupWithEmailPassword,signinWithGoogle, user,setImageAndName } = useContext(UserContext);
  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  console.log(from)


  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signinWithGoogle()
    .then((result) => {
      navigate(from, {replace: true});
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const imageLink = form.imageLink.value;
    
    const fullName = form.fullName.value;
    
    // console.log(image, fullName, 'farhad', 3)
    
    
    

    signupWithEmailPassword(email, password)
      .then((result) => {
        navigate(from, {replace: true});
        handleUsreImageName(fullName, imageLink)
        

        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(user);
  };

  const handleUsreImageName = (name, imageLink) => {

    const profileInfo = {
      displayName: name,
      photoURL: imageLink,
    }

    setImageAndName(profileInfo)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <section className="bg-base-200 min-h-[90vh]">
        <div className="hero min-h-[70vh]">
          <div className="hero-content flex flex-col">
            <div className="text-center mb-4">
              <h1 className="text-5xl font-bold">Signup now!</h1>
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleFormSubmit} className="card-body">
                {/* Full name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    className="input input-bordered"
                  />
                </div>

                {/* Photo URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>

                  <input
                    type="link"
                    placeholder="Your image URL here"
                    name="imageLink"
                    className="input input-bordered"
                  />
                </div>

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
                </div>

                {/* Login Button */}
                <label className="label mt-5">
                  <div className="">
                    <span className="text-black">
                      Allready have an accout?{" "}
                    </span>
                    <Link className="link link-hover text-blue-500" to="/login">
                      Login here
                    </Link>
                  </div>
                </label>
                <div className="form-control">
                  <button className="btn btn-primary">Signup</button>
                </div>
              </form>
            </div>

            <div className="form-control w-full">
              <button onClick={handleGoogleSignIn} className="btn bg-blue-400 border-none">
                <span className="mr-3">
                  <img
                    className="w-[30px] h-[30px] bg-white p-1 rounded"
                    src={googleIcon}
                    alt="google icon"
                  />
                </span>{" "}
                Singup with Google
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

import React, { useContext } from "react";
import { UserContext } from "../../context/AuthContext";

const Account = () => {
  const { user, signout } = useContext(UserContext);
  const handleSignOut = (e) => {
    e.preventDefault();
    signout()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  
  console.log(user);
  return (
    <div className="h-[80vh] flex items-center justify-center flex-col">
      <h2 className="text-center text-3xl font-bold py-8">Account</h2>
      <div className="flex items-center justify-center ">
        <div className="shadow-2xl p-8 rounded-lg">
          <div className="flex justify-center">
            <img className="rounded-full" src={user.photoURL} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl text-semibold">{user.displayName}</h1>
            <p>{user.email}</p>
          </div>

          <div className="text-center py-4">
        
              
                <button onClick={handleSignOut} className="btn btn-error hover">
                Sign out
              </button>
              
          </div>

        </div>
      </div>
    </div>
  );
};

export default Account;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const CheckOutPage = () => {
  const [home, setHome] = useState(true);

  const handleCheckout = (e) => {
    e.preventDefault();
    toast.success("Congratulations!! Successfully Course Purchase!");
    setHome(false)
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl text-center font-semibold">Check-out now!</h1>

      <div className="text-center my-8">
        {home ? (
          <button onClick={handleCheckout} className="btn btn-primary">
            Get your course now!
          </button>
        ) : (
          <Link to="/" className="btn btn-primary">Go home now</Link>
        )}
      </div>

      <Toaster />
    </div>
  );
};

export default CheckOutPage;

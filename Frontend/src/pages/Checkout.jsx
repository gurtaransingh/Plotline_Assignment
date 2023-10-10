import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 text-center">
        <h1 className="">Order Confirmed</h1>
        <hr />
        <p className="mt-4 fs-5">Please Check the <Link to="/order">Orders</Link> page for more information</p>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;

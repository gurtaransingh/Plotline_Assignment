import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Footer, Navbar } from "../components";
import { getSingleProduct } from "../utils/product";
import toast from "react-hot-toast";
import { addToCart } from "../utils/cart";
import { verifyToken } from "../utils/auth";
import Cookies from "js-cookie";

const Product = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.name}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h1 className="display-5">{product.name}</h1>
              <h3 className="display-6  my-4">₹ {product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={async () => {
                  let res = await addToCart(userId, product)
                  toast(res)
                }}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };


  useEffect(() => {
    async function getProduct() {
      let response = await getSingleProduct(id)

      if (!response.success) {
        toast.error(response.message)
      } else {
        setProduct(response.product)
        setLoading(false)
      }
    }

    async function getUser(token) {
      let response = await verifyToken(token)
      if (!response.success) {
        console.log(response.message)
        navigate("/login")
      } else {
        setUserId(response.userId)
      }
    }
    let token = Cookies.get("auth")

    getProduct()
    getUser(token)
  }, [id, navigate])

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {loading ? <p className="fs-4 text-center text-warning">Loading ...</p> : <ShowProduct />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;

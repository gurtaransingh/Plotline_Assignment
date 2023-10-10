import axios from "axios";

const getSingleProduct = async (productId) => {
    const res = await axios.get(`https://pl-assign.onrender.com/api/products/${productId}`)

    return res.data
}

export { getSingleProduct }
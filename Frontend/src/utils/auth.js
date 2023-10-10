import axios from "axios";

const verifyToken = async (token) => {
    const res = await axios.post("https://pl-assign.onrender.com/api/auth/verify-token", { token })

    return res.data
}

export { verifyToken }
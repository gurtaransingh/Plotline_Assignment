import axios from "axios";

const confirmOrder = async (userId, items, totalAmount) => {
    console.log("UserId in confirm order", userId)
    const res = await axios.post("https://pl-assign.onrender.com/api/orders", { userId, items, totalAmount })

    return res.data
}

const getOrdersByUser = async (userId) => {
    const res = await axios.get(`https://pl-assign.onrender.com/api/orders/${userId}`)

    return res.data
}
export { confirmOrder, getOrdersByUser }
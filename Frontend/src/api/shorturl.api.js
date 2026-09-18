import axiosInstance from "../utils/axiosinstance"
export const createShortUrl = async (url)=>{
    return await axiosInstance.post("http://localhost:3000/api/create", { url })
}
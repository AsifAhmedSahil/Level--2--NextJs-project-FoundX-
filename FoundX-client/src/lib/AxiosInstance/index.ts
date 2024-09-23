/* eslint-disable import/order */
/* eslint-disable prettier/prettier */


import envConfig from "@/src/config/envConfig"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: envConfig.baseApi
})

export default axiosInstance
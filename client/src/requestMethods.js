import axios from "axios"

const BASE_URL = "https://collocation-dictionary.vercel.app/api"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

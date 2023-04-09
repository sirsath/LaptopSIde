import axios from "axios"
export const URL = "http://localhost:5000/api"
// export const URL = "https://railway-mern-production-7521.up.railway.app/api"
// export const PhotoURL = "https://railway-mern-production-7521.up.railway.app"
const api = axios.create({
    baseURL: URL
})

export default api
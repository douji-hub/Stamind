import axios from 'axios'

const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3001/api" : "https://ccj.infocom.yzu.edu.tw:1027"

const apiClient = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default apiClient
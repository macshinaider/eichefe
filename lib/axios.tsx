import axios  from 'axios'


const url = process.env.NEXT_PUBLIC_URL_BASE || 'http://localhost:3000'

const api = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json'
    }
})

export default api
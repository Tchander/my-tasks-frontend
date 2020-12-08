import axios from 'axios'

let API_URL = 'http://localhost:3000'
// if (process.env.NODE_ENV === 'production') {
//   API_URL = 'https://cryptic-stream-50751.herokuapp.com/'
// } else {
//   API_URL = 'http://localhost:3000'
// }

export default axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

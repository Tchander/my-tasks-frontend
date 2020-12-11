import axios from 'axios'
import { environment } from '../environments/environment';

let API_URL = 'http://localhost:3000'
if (environment.production) {
  API_URL = 'https://cryptic-stream-50751.herokuapp.com/'
}

export default axios.create({
  baseURL: API_URL,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

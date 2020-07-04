import axios from 'axios'

const backendurl = 'http://localhost:4000'

const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  return headers
}

export default axios.create({
  baseURL: `${backendurl}/api/`,
  headers: getHeaders()
});

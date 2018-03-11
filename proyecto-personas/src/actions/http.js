import axios from 'axios'

const http = axios.create({
  baseURL: 'https://reactjsteachingproj.herokuapp.com/'
})

export default http;

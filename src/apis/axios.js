import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://immense-refuge-87119.herokuapp.com/', //'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
})
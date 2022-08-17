import axios from 'axios'

export default axios.create({
  baseURL:'https://www.google',
  params: {
part: 'snippet',
  }
})
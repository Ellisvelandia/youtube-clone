import axios from 'axios'

export default axios.create({
  baseURL:'https://www.googlepapis.com',
  params: {
part: 'snippet',
  }
})
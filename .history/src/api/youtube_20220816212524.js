import axios from 'axios'

export default axios.create({
  baseURL:'https://www.googlepapis.com/youtube',
  params: {
part: 'snippet',
  }
})
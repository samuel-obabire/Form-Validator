import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: '3e7c0cdb67ae4f7abba125625200111',
  },
});

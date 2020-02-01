import axios from 'axios';

// local IP from expo when running in device not simulator
const api = axios.create({
  baseURL: 'http://192.168.1.103:3333'
});

export default api;

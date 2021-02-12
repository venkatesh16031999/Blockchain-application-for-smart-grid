const axios=require('axios');

axios.defaults.headers.post['Content-Type'] = 'application/json';


const instance = axios.create({
    baseURL: 'http://localhost:4000'
  });


export default instance;
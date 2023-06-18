import axios from 'axios';

export default axios.create({
    baseURL: 'https://374c-2607-9880-10e8-6c-44-91c6-aaa3-c331.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})
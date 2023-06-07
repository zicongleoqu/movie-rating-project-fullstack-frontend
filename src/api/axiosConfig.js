import axios from 'axios';

export default axios.create({
    baseURL: 'https://2ad1-2607-9880-10e8-6c-851-317b-7e51-6fdd.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})
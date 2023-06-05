import axios from 'axios';

export default axios.create({
    baseURL: 'https://6ca8-2607-9880-10e8-6c-d04f-6b20-c532-4c4c.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
})
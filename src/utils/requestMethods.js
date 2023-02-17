import axios from "axios"

const serverMode = false;
const localhost = 'http://localhost:5000';
const production = ''

const requestUrl = axios.create({
    baseURL: (serverMode ? production : localhost),
    headers: {
        'Content-Type': 'application/json',
    },
})

export default requestUrl
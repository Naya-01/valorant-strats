import axios from 'axios'
const baseUrl = 'https://valorant-api.com/v1/agents'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {
    getAll
}
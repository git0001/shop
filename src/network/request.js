import Axios from 'axios'
export function request(config) {
    let axios = Axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    return axios(config)
}
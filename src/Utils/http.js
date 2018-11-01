import axios from 'axios'
import { host } from '../Constants/HostConstants'

axios.defaults.baseURL = host;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 1000;
// axios.defaults.header.common['X-Request-With'] = 'XMLHttpRequest'
// axios拦截器
// axios.interceptors.request.use(config => {
//     config.setHeaders([

//         // 在这里设置请求头与携带token信息
//     ])
//     return config
// })

axios.interceptors.response.use(response => {
    if (response.status === 200 || response.status === '200') {
        return response
    } else {
        // 非200请求抱错
        throw Error(response.data.msg || '服务异常')
    }
})

export default axios
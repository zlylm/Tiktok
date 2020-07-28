import axios from 'axios'

const GlobalUrl = 'https://www.easy-mock.com/mock/5f1fcb0a74a4ec373ea6ae37/tiktok'

const config = {
    baseURL: GlobalUrl,
}

const _Axios = axios.create(config)


_Axios.interceptors.request.use(resconfig=>{
    // 序列化参数
    resconfig.data = new URLSearchParams(resconfig.data)
    return resconfig;
})

// 响应拦截器
_Axios.interceptors.response.use(res=>{
    return res
})


export default function Request(url: any,data={},method: any='post'){
    return new Promise((resolve,reject)=>{
        _Axios({
            url,
            method,
            data
        }).then(res=>{
            if (res.status == 200) {
                resolve(res)
            } else {
                alert('接口异常！')
            }
            resolve(null)
        }).catch(err=>{
            alert('接口异常！')
            resolve(null)
        })
    })
}
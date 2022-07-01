import { axios } from '@/https/axios'
//敏感词校验
export const getUser = (data: any) => {
  return axios({
    url: '/getUser',
    data,
    method: 'get',
    config: {
      // headers: {
      //     'Request-Type': 'wechat'
      // },
      timeout: 10000
    }
  })
} 

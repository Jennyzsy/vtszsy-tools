import instance from './index'
/**
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @param {Object} config  请求的配置
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
const axios = async ({ method, url, data, config }: any): Promise<any> => {
  method = method.toLowerCase()
  // 'post'请求
  if (method == 'post') {
    return instance.post(url, data, { ...config })
  }
  // 'get'请求
  if (method == 'get') {
    return instance.get(url, {
      params: data,
      ...config
    })
  }
  // 'delete'请求
  if (method == 'delete') {
    return instance.delete(url, {
      params: data,
      ...config
    })
  }
  // 'put'请求
  if (method == 'put') {
    return instance.put(url, data, { ...config })
  }
  console.error('未知的method' + method)
  return false
}
export { axios }

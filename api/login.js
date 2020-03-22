//https://api.npse.com:8081/v1/forum/{sportType}/0/{type}/articles?limit=100&offset=0

/**
 * 登录接口
 */

import base from './base'; // 导入接口域名列表
import qs from 'qs'; // 根据需求是否导入qs模块
// import $axios from '@nuxtjs/axios'

export function sendLoginSms (params,headers) {
  return this.$axios.get(`${base.sq}/SendLoginSms`,{params:params,headers:headers});
}
export function otpLogin(params,headers){
  return $axios.post(`${base.sq}/OTPLogin`,qs.stringify(params),{headers:headers} );
}

export  function login (params,headers) {
  return $axios.post(`${base.sq}/Login`,params,{headers:headers} );
}
export function updateNickName(params,headers){
  return $axios.put(`${base.sq}/UpdateNickName`,params,{headers:headers})
}

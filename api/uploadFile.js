//https://api.npse.com:8081/v1/forum/{sportType}/0/{type}/articles?limit=100&offset=0

/**
 * 登录接口
 */

import base from './base'; // 导入接口域名列表
// import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const uploadFile = {

    //验证otpLogin
    // https://api.npse.com:8081/UploadAvatar
    //
    uploadAvatar(params,headers){
        var form = new FormData()    // FormData 对象
        form.append('image', params)
        return axios.post(`${base.sq}/UploadAvatar`,form,{headers:headers} );
    },

}

export default uploadFile;

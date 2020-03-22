/**
 * 点赞接口
 */

import base from './base'; // 导入接口域名列表
// import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const like = {
    //点赞
    doLike(params,headers){
        return axios.post(`${base.sq}/Like`,params,{headers:headers} );
    },

}

export default like;

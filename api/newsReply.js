/**
 * 新闻留言模块接口列表
 */

import base from './base'; // 导入接口域名列表
// import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const newsReply = {
    // 留言列表
    replyList (type,paraentId,sort,params) {
        //https://api.npse.com:8081/v2/{type}/{paraentId}/{sort}/replys
        return axios.get(`${base.sq}/v2/`+type+`/`+paraentId+`/`+sort+`/replys`,{params:params});
    },
    //张贴留言回复接口
    //https://api.npse.com:8081/v2/{type}/{parentId}/reply
    reply(type,parentId,params,headers){
        return axios.post(`${base.sq}/v2/`+type+`/`+parentId+`/reply`,params,{headers:headers} );
    },


}

export default newsReply;

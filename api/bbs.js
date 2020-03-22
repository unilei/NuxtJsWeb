//https://api.npse.com:8081/v1/forum/{sportType}/0/{type}/articles?limit=100&offset=0

/**
 * 帖子列表接口
 */

import base from './base'; // 导入接口域名列表
// import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const bbs = {
    // 新闻列表
    bbsList (sportType,type,params) {
        //https://api.npse.com:8081/v2/GetMatchList
        return axios.get(`${base.sq}/v1/forum/`+sportType+`/0/`+type+`/articles`,{params:params});
    },
    // 新闻详情,演示
    //https://api.npse.com:8081/v1/forum/{articleId}
    bbsDetail (articleId, params) {
        return axios.get(`${base.sq}/v1/forum/`+articleId, {
            params: params
        });
    },

}

export default bbs;

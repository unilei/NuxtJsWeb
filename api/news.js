/**
 * news模块接口列表
 */

import base from './base'; // 导入接口域名列表
// import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const news = {
    // 新闻列表
    newsList (params) {
        return axios.get(`${base.sq}/v2/GetArticles`,{params:params});
    },
    newsDetail(params){
        return axios.get(`${base.sq}/v2/GetArticleDetail`,{params:params});
    }

}

export default news;

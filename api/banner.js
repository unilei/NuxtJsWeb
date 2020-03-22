/**
 * 轮播图模块接口列表
 */

import base from './base'; // 导入接口域名列表
// import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const banner = {
    // 新闻列表
    bannerList (params) {
        //https://api.npse.com:8081/GetBanner?platform=WEB
        return axios.get(`${base.sq}/GetBanner`,{params:params});
    }

}

export default banner;

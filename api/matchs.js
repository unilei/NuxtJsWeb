/**
 * 赛事列表接口
 */

import base from 'base'; // 导入接口域名列表
import qs from 'qs'; // 根据需求是否导入qs模块

export function matchList (params) {
  return this.$axios.$get(`${base.sq}/v2/GetMatchList`,{params:params})
}

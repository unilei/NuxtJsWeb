/*
** 只在生产模式的客户端中使用
*/
if (process.client ) {
  /*
  ** Google 统计分析脚本
  */
  // (function (i, s, o, g, r, a, m) {
  //   i.GoogleAnalyticsObject = r; i[r] = i[r] || function () {
  //     (i[r].q = i[r].q || []).push(arguments)
  //   }, i[r].l = 1 * new Date(); a = s.createElement(o),
  //     m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  // })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
  /*
  ** 当前页的访问统计
  */
  // ga('create', 'UA-XXXXXXXX-X', 'auto')

  var _hmt = _hmt || [];
  window._hmt = _hmt; // 必须把_hmt挂载到window下，否则找不到
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://js.users.51.la/20532775.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

}

export default ({ app: { router }, store }) => {
  /*
  ** 每次路由变更时进行pv统计
  */
  router.afterEach((to, from) => {
    /*
    ** 告诉 GA 增加一个 PV
    */
    // ga('set', 'page', to.fullPath)
    // ga('send', 'pageview')
  })
}

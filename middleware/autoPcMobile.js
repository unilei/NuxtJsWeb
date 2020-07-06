import base from '../api/base'
const axios = require('axios')

export default function (context) {
  // console.log(context)
  let buildType = process.env.BUILD_TYPE;

  let pcOrigin = '';
  let mobileOrigin = '';

  //171tiyu.com
  // hotforest.cn
  // npse.com
  // nsnni.com
  // oxtiyu.com
  // 51体育.com
  // 51体育.net
  // 51体育.org
  // xotiyu.com

  if (buildType === 'stage'){
    if (process.server){
      let hostname = context.req.headers['host']
      // console.log(hostname)
      if (hostname === 's.171tiyu.com'){
        pcOrigin = 'http://s.171tiyu.com'
        mobileOrigin = 'http://sm.171tiyu.com'
      }
      if (hostname === 's.hotforest.cn'){
        pcOrigin = 'http://s.hotforest.cn'
        mobileOrigin = 'http://sm.hotforest.cn'
      }
      if (hostname === 's.npse.com'){
        pcOrigin = 'http://s.npse.com'
        mobileOrigin = 'http://sm.npse.com'
      }
      if (hostname === 's.nsnni.com'){
        pcOrigin = 'http://s.nsnni.com'
        mobileOrigin = 'http://sm.nsnni.com'
      }
      if (hostname === 's.oxtiyu.com'){
        pcOrigin = 'http://s.oxtiyu.com'
        mobileOrigin = 'http://sm.oxtiyu.com'
      }
      if (hostname === 's.51体育.com'){
        pcOrigin = 'http://s.51体育.com'
        mobileOrigin = 'http://sm.51体育.com'
      }
      if (hostname === 's.51体育.net'){
        pcOrigin = 'http://s.51体育.net'
        mobileOrigin = 'http://sm.51体育.net'
      }
      if (hostname === 's.51体育.org'){
        pcOrigin = 'http://s.51体育.org'
        mobileOrigin = 'http://sm.51体育.org'
      }
      if (hostname === 's.xotiyu.com'){
        pcOrigin = 'http://s.xotiyu.com'
        mobileOrigin = 'http://sm.xotiyu.com'
      }

    }

    // mobileOrigin = 'https://www.sougou.com'
  } else if (buildType === 'release'){
    if (process.server){
      let hostname = context.req.headers['host']
      // console.log(hostname)
      if (hostname === 'sl.171tiyu.com'){
        pcOrigin = 'http://sl.171tiyu.com'
        mobileOrigin = 'http://slm.171tiyu.com'
      }
      if (hostname === 'sl.hotforest.cn'){
        pcOrigin = 'http://sl.hotforest.cn'
        mobileOrigin = 'http://slm.hotforest.cn'
      }
      if (hostname === 'sl.npse.com'){
        pcOrigin = 'http://sl.npse.com'
        mobileOrigin = 'http://slm.npse.com'
      }
      if (hostname === 'sl.nsnni.com'){
        pcOrigin = 'http://sl.nsnni.com'
        mobileOrigin = 'http://slm.nsnni.com'
      }
      if (hostname === 'sl.oxtiyu.com'){
        pcOrigin = 'http://sl.oxtiyu.com'
        mobileOrigin = 'http://slm.oxtiyu.com'
      }
      if (hostname === 'sl.51体育.com'){
        pcOrigin = 'http://sl.51体育.com'
        mobileOrigin = 'http://slm.51体育.com'
      }
      if (hostname === 'sl.51体育.net'){
        pcOrigin = 'http://sl.51体育.net'
        mobileOrigin = 'http://slm.51体育.net'
      }
      if (hostname === 'sl.51体育.org'){
        pcOrigin = 'http://sl.51体育.org'
        mobileOrigin = 'http://slm.51体育.org'
      }
      if (hostname === 'sl.xotiyu.com'){
        pcOrigin = 'http://sl.xotiyu.com'
        mobileOrigin = 'http://slm.xotiyu.com'
      }

    }
  } else if (buildType === 'production'){
    if (process.server){
      let hostname = context.req.headers['host']
      // console.log(hostname)
      if (hostname === 'www.171tiyu.com' || hostname === '171tiyu.com'){
        pcOrigin = 'http://www.171tiyu.com'
        mobileOrigin = 'http://m.171tiyu.com'
      }
      if (hostname === 'www.hotforest.cn' || hostname === 'hotforest.cn'){
        pcOrigin = 'http://www.hotforest.cn'
        mobileOrigin = 'http://m.hotforest.cn'
      }
      if (hostname === 'www.npse.com' || hostname === 'npse.com'){
        pcOrigin = 'http://www.npse.com'
        mobileOrigin = 'http://m.npse.com'
      }
      if (hostname === 'www.nsnni.com' || hostname === 'nsnni.com'){
        pcOrigin = 'http://www.nsnni.com'
        mobileOrigin = 'http://m.nsnni.com'
      }
      if (hostname === 'www.oxtiyu.com' || hostname === 'oxtiyu.com'){
        pcOrigin = 'http://www.oxtiyu.com'
        mobileOrigin = 'http://m.oxtiyu.com'
      }
      if (hostname === 'www.51体育.com' || hostname === '51体育.com'){
        pcOrigin = 'http://www.51体育.com'
        mobileOrigin = 'http://m.51体育.com'
      }
      if (hostname === 'www.51体育.net' || hostname === '51体育.net'){
        pcOrigin = 'http://www.51体育.net'
        mobileOrigin = 'http://m.51体育.net'
      }
      if (hostname === 'www.51体育.org' || hostname === '51体育.org'){
        pcOrigin = 'http://www.51体育.org'
        mobileOrigin = 'http://m.51体育.org'
      }
      if (hostname === 'www.xotiyu.com' || hostname === 'xotiyu.com'){
        pcOrigin = 'http://www.xotiyu.com'
        mobileOrigin = 'http://m.xotiyu.com'
      }

    }
  } else {
    pcOrigin = 'http://www.171tiyu.com'
    mobileOrigin = 'http://m.171tiyu.com'
  }

  let old_route_fullPath = context.route.fullPath;
  let fullPathArr = old_route_fullPath.split('/')
  if (fullPathArr[1] === 'article' || fullPathArr[1] === 'news'){
    let s = fullPathArr[2];
    let sArr = s.split('-');
    let redirect_url = pcOrigin+'/nsnews/'+sArr[0]+'/'+s;
    return context.redirect(301,redirect_url)
  }

  if (old_route_fullPath === '/protocol' ){
    let redirect_url = pcOrigin+'/profile/agreement'
    return context.redirect(301,redirect_url)
  }
  if (old_route_fullPath === '/privacy'){
    let redirect_url = pcOrigin+'/profile/privacy'
    return context.redirect(301,redirect_url)
  }
  if (old_route_fullPath === '/complaint'){
    let redirect_url = pcOrigin+'/profile/complaint'
    return context.redirect(301,redirect_url)
  }

  if (old_route_fullPath === '/download/android?channelCode=Web_Landing_Page'){
    let redirect_url = pcOrigin+'/download'
    return context.redirect(301,redirect_url)
  }
  if (old_route_fullPath === '/app'){
    let redirect_url = pcOrigin+'/download'
    return context.redirect(301,redirect_url)
  }


  // 旧链接跳转
  let old_route_name = context.route.name;

  if (old_route_name === 'sportNews-detail-shorturl'){

    let old_params = context.route.params.shorturl;
    let sArr = old_params.split('-');
    let redirect_url = pcOrigin+'/nsnews/'+sArr[0]+'/'+old_params;

    return context.redirect(301,redirect_url);
  }
  if (old_route_name === 'sportNews-list-league'){
    return context.redirect(301,pcOrigin+'/nsnews/all')
  }
  if (old_route_name === 'bbs-list-sportType'){
    return context.redirect(301,pcOrigin+'/nsforum/football')
  }
  if (old_route_name === 'bbs-detail-articleId'){
    let article_id = context.route.params.articleId;
    axios.get(`${base.sq}/v1/forum/` + article_id).then(
      res=>{
        if (res.data.Status === 1){
          let category = res.data.Data[0].category;
          let redirect_url = pcOrigin + '/nsforum/'+category+'/'+article_id;
          return context.redirect(301,redirect_url)
        }
      }
    )

  }

  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }

  let userAgent = context.req ? context.req.headers['user-agent'] : navigator.userAgent || ''

  return isMobile(userAgent) ? context.redirect(301,mobileOrigin+context.route.fullPath) : ''
  // 使用redirect 重定向到外链需要加上前缀:http / https

}

export default function ({isServer,req,redirect,route}) {

  let pcOrigin = 'http://www.171tiyu.com'
  let mobileOrigin = 'http://m.hotforest.cn'

  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }

  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''

  console.log(isMobile(userAgent))

  return isMobile(userAgent) ? redirect(mobileOrigin) : ''
  // 使用redirect 重定向到外链需要加上前缀:http / https

}

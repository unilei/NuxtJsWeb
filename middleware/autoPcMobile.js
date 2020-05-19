export default function ({isServer,req,redirect,route}) {

  // let pcOrigin = 'https://www.171tiyu.com'
  let mobileOrigin = 'https://m.171tiyu.com'
  // let mobileOrigin = 'http://localhost:3001'

  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }

  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''

  // console.log(isMobile(userAgent))
  // console.log(route)

  return isMobile(userAgent) ? redirect(mobileOrigin+route.fullPath) : ''
  // 使用redirect 重定向到外链需要加上前缀:http / https

}

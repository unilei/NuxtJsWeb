export default function ({isServer,req,redirect,route}) {

  let pcOrigin = 'http://localhost:3000'
  let mobileOrigin = 'http://localhost:3001'

  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }

  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''

  console.log(isMobile(userAgent))

  return isMobile(userAgent) ? redirect(mobileOrigin) : ''
  // 使用redirect 重定向到外链需要加上前缀:http / https

}

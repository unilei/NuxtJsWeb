import Vue from 'vue'

Vue.filter('host',function (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace('?id=', '/')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') { parts.shift() }
  return parts.join('.')
})

Vue.filter('timeAgo',function (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
})

Vue.filter('dateFormat',function (dataStr) {
  let time = new Date(dataStr * 1000)

  function timeAdd0 (str) {
    if (str < 10) {
      str = '0' + str
    }
    return str
  }

  var y = time.getFullYear();
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds();
  return timeAdd0(y) +'-'+ timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s)
})

Vue.filter('dateForHour',function (timeStamp) {
  let dateTime = new Date(timeStamp * 1000)
  let no1new = dateTime.valueOf()
  let year = dateTime.getFullYear()
  let month = dateTime.getMonth() + 1
  let day = dateTime.getDate()
  let now = new Date()
  let now_new = now.valueOf()
  let milliseconds = 0
  let timeSpanStr

  milliseconds = now_new - no1new

  if (milliseconds <= 1000 * 60 * 1) {
    timeSpanStr = '刚刚'
  } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
    timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
  } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
  } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
  } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
    timeSpanStr = year + '-' + month + '-' + day
  } else {
    timeSpanStr = year + '-' + month + '-' + day
  }
  return timeSpanStr
})

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

Vue.filter('waterMark',function (url) {
  var  root_url = url.slice(0,33);
  var  pic_str = url.slice(33);
  return root_url+'watermark_1/'+pic_str;
})

import Vue from 'vue'

export function dateFormat (dataStr) {

  var time = new Date(dataStr * 1000)

  function timeAdd0 (str) {
    if (str < 10) {
      str = '0' + str
    }
    return str
  }

  // var y = time.getFullYear();
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  // var s = time.getSeconds();
  return timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm)

}

export function dateForHour (timeStamp) {
  var dateTime = new Date(timeStamp * 1000)
  var no1new = dateTime.valueOf()
  var year = dateTime.getFullYear()
  var month = dateTime.getMonth() + 1
  var day = dateTime.getDate()
  var now = new Date()
  var now_new = now.valueOf()
  var milliseconds = 0
  var timeSpanStr

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
    // timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    timeSpanStr = year + '-' + month + '-' + day
  } else {
    // timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    timeSpanStr = year + '-' + month + '-' + day
  }
  return timeSpanStr
}
let filters = {}
if (process.client){
   filters = {

    dateForHour,
    dateFormat
  }
}

export default filters

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

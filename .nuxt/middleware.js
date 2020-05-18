const middleware = {}

middleware['autoPcMobile'] = require('..\\middleware\\autoPcMobile.js')
middleware['autoPcMobile'] = middleware['autoPcMobile'].default || middleware['autoPcMobile']

export default middleware

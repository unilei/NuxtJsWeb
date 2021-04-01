// 301redirect
export default function (req, res, next) {
  let req_host= req.header('host');
  let req_path = req.path;
  let build_type = process.env.BUILD_TYPE;
  //171tiyu.com
  // hotforest.cn
  // npse.com
  // nsnni.com
  // oxtiyu.com
  // 51体育.com
  // 51体育.net
  // 51体育.org
  // xotiyu.com
  let whiteList = [
    'localhost:3000',
    'localhost:3001',
    'laycode.cn',
    'sport.laycode.cn',
    '47.103.30.132:3001',
    '47.103.30.132:3000',
    'www.hotforest.cn',
    'm.hotforest.cn',
    's.hotforest.cn',
    'sm.hotforest.cn',
    'sl.hotforest.cn',
    'slm.hotforest.cn',
    'www.npse.com',
    'm.npse.com',
    'npse.com',
    's.npse.com',
    'sm.npse.com',
    'sl.npse.com',
    'slm.npse.com',
    'www.nsnni.com',
    'm.nsnni.com',
    'nsnni.com',
    's.nsnni.com',
    'sm.nsnni.com',
    'sl.nsnni.com',
    'slm.nsnni.com',
    'www.oxtiyu.com',
    'oxtiyu.com',
    'm.oxtiyu.com',
    's.oxtiyu.com',
    'sm.oxtiyu.com',
    'sl.oxtiyu.com',
    'slm.oxtiyu.com',
    'ww.xotiyu.com',
    'xotiyu.com',
    's.xotiyu.com',
    'sm.xotiyu.com',
    'sl.xotiyu.com',
    'slm.xotiyu.com',
    'www.51体育.com',
    '51体育.com',
    'm.51体育.com',
    's.51体育.com',
    'sm.51体育.com',
    'sl.51体育.com',
    'slm.51体育.com',
    'www.51体育.net',
    '51体育.net',
    'm.51体育.net',
    's.51体育.net',
    'sm.51体育.net',
    'sl.51体育.net',
    'slm.51体育.net',
    'www.171tiyu.com',
    '171tiyu.com',
    's.171tiyu.com',
    'sm.171tiyu.com',
    'sl.171tiyu.com',
    'slm.171tiyu.com',
    'www.51体育.org',
    '51体育.org',
    'm.51体育.org',
    's.51体育.org',
    'sm.51体育.org',
    'sl.51体育.org',
    'slm.51体育.org'
  ];
  // console.log(process.env.NODE_ENV);
  // console.log(build_type);

  if (whiteList.find(item=>item === req_host)){

    if ( req_host === '171tiyu.com'){

      let new_host = '';

      if (build_type === 'stage'){
        new_host = 'http://s.171tiyu.com'+req_path;
      }
      if (build_type === 'release'){
        new_host = 'http://sl.171tiyu.com'+req_path;
      }
      if (build_type === 'production'){
        new_host = 'http://www.171tiyu.com'+req_path;
      }

      res.writeHead(301, { Location: new_host});
      res.end();
    }else{
      next();
    }
  }else{

    res.writeHead('404');
    res.end();
  }


}

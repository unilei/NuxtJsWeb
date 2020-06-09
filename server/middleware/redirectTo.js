// 301redirect
export default function (req, res, next) {
  let req_host= req.header('host');
  let req_path = req.path;
  let build_type = process.env.BUILD_TYPE;

  let whiteList = [
    'localhost:3000',
    'localhost:3001',
    '47.103.30.132:3001',
    '47.103.30.132:3000',
    'www.hotforest.cn',
    'm.hotforest.cn',
    'www.171tiyu.com',
    '171tiyu.com',
    's.171tiyu.com',
    'sm.171tiyu.com',
    'sl.171tiyu.com',
    'slm.171tiyu.com'
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

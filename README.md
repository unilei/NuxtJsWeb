# 全民体育PC版官网

> 对seo友好的框架nuxt.js 
> http://sport.laycode.cn

![第一个版本](/readme/v1.png)
![第二个版本](/readme/dev2.png)

## 运行流程
#### 首先克隆代码到本地目录 
> git clone https://github.com/unilei/nuxt-pc-web.git
#### 进入到代码根目录下 
> npm install 

> npm run dev

## 网站运行命令

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## 部署到服务器 以宝塔为例

```
1，上传.nuxt  server  static .env  nuxt.config.js  package.json 到服务器目录

2，安装node，一般node安装好之后，会有npm   ，如果感觉npm资源很慢，可以执行下面这个命令：npm install -g cnpm --registry=https://registry.npm.taobao.org （推荐）

3，进入根目录 ，执行  cnpm/npm  install 

4,部署nginx 反向代理

upstream nodenuxt {
    server 127.0.0.1:3000; #nuxt项目 监听端口
    keepalive 64;
}

server {
    listen 80;
    server_name  www.171tiyu.com;
    location / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://nodenuxt; #反向代理
    }
}
5，在根目录执行 npm  run start  此时打开网址 就能够看到网站内容了
6，但是根据第5步的操作，不能关闭命令行，关闭命令行网站就打不开了 所以需要做一个进程守护，官方推荐pm2
7，如果使用pm2  需要在根目录下执行 
pm2    start    npm --name  "sports-v-2"  --   run start 

```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');//调试模块 用于输出一些调试信息
var bodyParser = require('body-parser');//格式化request数据的中间件

/// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/// 设置静态目录
app.use(express.static('./public'));

/// 当用户访问 http://localhost:3000/
app.get('/',function(req,res){
	res.redirect('/blog/list'); //页面跳转
})

// 管理后台权限判断
app.all('/admin/*',function(req,res,next){
  console.log('此处访问的是管理后台');
  ////如果没有登录 跳转到登录页面，否则next
  /**
   *
   * if(没有登录){
   *  res.redirect('/login')
   * }
   * else{
   *  next();
   * }
   *
   */
  next();
})

app.use('/admin/blog',require('./routers/admin/blog'));

// 设置引入前端blog页面的路由模块
app.use('/blog',require('./routers/blog'));

app.use('/api/blog',require('./routers/api/blog'));

app.listen(3000,function(){
  console.log('服务器运行于3000端口....');
});

var koa = require('koa');
var views = require('co-views');
var app = koa();
var serve = require('koa-static');
var path = require('path');

app.use(serve(__dirname+'/public'));


app.listen(process.env.PORT || 5000);

module.exports = app;
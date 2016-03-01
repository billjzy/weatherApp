var koa = require('koa');
var views = require('co-views');
var app = koa();
var serve = require('koa-static');
var path = require('path');

app.use(serve(__dirname+'/public'));


app.listen(8080);

module.exports = app;
const createError = require('http-errors');
// const router = express.Router();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// console.log(__dirname + "/public/index.html");

// router.get('/index', function(req, res) {
//   res.sendFile("index.html")
// })

// router.get('/contact', (req, res) => {
//   res.sendFile('/public/contact.html')
// })

// router.get('/services', (req, res) => {
//   res.sendFile(__dirname + '/public/services.html')
// })

// router.get('/about', (req, res) => {
//   res.sendFile('/public/about.html')
// })

// router.get('/portfolio', (req, res) => {
//   res.sendFile('/public/portfolio.html')
// })



module.exports = app;

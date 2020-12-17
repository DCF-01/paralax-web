var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index.html')
})


router.get('/index', function(req, res) {
  res.sendFile(__dirname + "/html/index.html")
})

router.get('/home', function(req, res) {
  res.sendFile(__dirname + "/html/index.html")
})

router.get('/contact', (req, res) => {
  res.sendFile(__dirname + "/html/contact.html")
})

router.get('/services', (req, res) => {
  res.sendFile(__dirname + "/html/services.html")
})

router.get('/about', (req, res) => {
  res.sendFile(__dirname + "/html/about.html")
})

router.get('/portfolio', (req, res) => {
  res.sendFile(__dirname + "/html/portfolio.html")
})


module.exports = router;

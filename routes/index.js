var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Início', page: '/' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Sobre', page: '/about' });
});

/* POST data. */
router.post('/data', function(req, res, next) {
  res.render('data', { title: 'Dados', page: '/data', data: req.body });
});

module.exports = router;

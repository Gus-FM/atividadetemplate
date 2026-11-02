var express = require('express');
var router = express.Router();

/* GET users: sem userid redireciona para o cadastro. */
router.get('/', function(req, res, next) {
  res.redirect('/users/signup');
});

/* GET signin page. */
router.get('/signin', function(req, res, next) {
  // O formulário envia o userid via query string; sem ele, segue para o cadastro
  if (req.query.userid === undefined) {
    return res.render('signin', { title: 'Entrar', page: '/users/signin' });
  }
  var userid = req.query.userid.trim();
  if (!userid) {
    return res.redirect('/users/signup');
  }
  res.redirect('/users/' + encodeURIComponent(userid));
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Cadastro', page: '/users/signup' });
});

/* GET user welcome page. */
router.get('/:userid', function(req, res, next) {
  res.render('user', { title: 'Usuário', page: '/users', userid: req.params.userid });
});

module.exports = router;

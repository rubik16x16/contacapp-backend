var express = require('express');
var router = express.Router();

var contactos = require('../controllers/contactos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contactos', contactos.index);
router.post('/contactos', contactos.store);
router.put('/contactos/:id', contactos.update);
router.delete('/contactos/:id', contactos.destroy);

module.exports = router;

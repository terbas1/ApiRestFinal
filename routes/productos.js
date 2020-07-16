var express = require('express');
var router = express.Router();
let controller = require('../controllers/AppController');

// WS listar registros
router.get('/', function(req, res, next) {
  controller.listar(req, res);
});

// WS mostrar un registro por su id
router.get('/:id', function(req, res, next) {
  controller.show(req, res);
});

// WS crear registro
router.post('/', function(req, res, next){
  console.log(req.body);
  controller.store(req, res);
});

// WS actualizar registro
router.put('/:id', function(req, res, next){
  
  controller.edit(req, res);
});

// WS eliminar registro
router.delete('/:id', function(req, res, next){
  controller.delete(req, res);
});

module.exports = router;

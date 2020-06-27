//express é um framework para auxiliar no desenvolvimento de API
const express = require('express');
//consome a dependência express para que possamos usar na aplicação

const router = express.Router();
//router é uma função do express para manipulação de rotas


const controller = require('../controllers/personController')
//consome funções disponíveis na classe personController

//mapea as rotas
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
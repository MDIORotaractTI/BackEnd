//express é um framework para auxiliar no desenvolvimento de API
const express = require('express');
//consome a dependência express para que possamos usar na aplicação

const router = express.Router();
//router é uma função do express para manipulação de rotas

//definição de retorno 200 da rota / index
router.get('/', function (req, res) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

module.exports = router;
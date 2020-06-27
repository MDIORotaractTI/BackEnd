//ponto de inicialização da aplicação

//express é um framework para auxiliar no desenvolvimento de API
const express = require('express');
//consome a dependência express para que possamos usar na aplicação

const app = express();
//variável que irá manipular as funções disponíveis no express

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const port = 3000
//porta usada

//definição de rotas principais x classes js
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})

module.exports = app;





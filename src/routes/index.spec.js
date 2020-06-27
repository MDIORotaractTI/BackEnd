var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var assert = chai.assert;
 
chai.use(chaiHttp);

describe('/GET index', function() {
    it('Deve retornar a versão da API', function(done) {
        chai.request(server)
        .get('/')
        .end(function(error, res) {
            //Se tudo der certo deve retornar o status: 200 - OK
            assert.equal(res.statusCode, 200);
        done();
        });
    });
});
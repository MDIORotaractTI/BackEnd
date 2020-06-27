var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3000/";

describe("Index",function(){

  it("get /",function(done){
    request.get(
      {
        url : urlBase
      },
      function(error, response, body){

        // precisamos converter o retorno para um objeto json
        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        // sucesso (200)?
        expect(response.statusCode).to.equal(200);

      done();
      }
    );
  });
});
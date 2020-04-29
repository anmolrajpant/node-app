var request = require('supertest');
var app = require('../index.js');

//navigate to root and check the the response is "Hey, There!!!"
describe('GET /', function(){
    it('respond with Hey, There!!!', function(done){
        request(app).get('/').expect('Hey, There!!!', done);
    });
});
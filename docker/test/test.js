// Requiring module
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app')
// let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Application web-page', () => {
    before(() => { 
        console.log('This part executes once before all tests');       
    });

  describe('/', () => {
      it('it should display a webpage', () => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
  });

});


after(() => {
    console.log( "This part executes once after all tests" );
  });




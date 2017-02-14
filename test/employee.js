 /*
 * Arquivo: routes/employee.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável por realizar o TDD com Mocha & Chai no lado do server da nossa app.
 * Data: 13/02/2017
 * 
 */

process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var Employee = require('../app/models/employee');

//Aqui estamos declarando as dependências necessárias para realizar os nossos testes!
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

//Aqui é o bloco principal que executará o nossos testes:
describe('Employees', function() {
    beforeEach(function(done) {

        //Sempre depois de executar o nosso teste, iremos limpar a nossa base de dados:
        Employee.remove({}, function(error) {
            done();
        });
    });

/** 
 * Teste da rota: /GET
 */
describe('/GET employee', function() {
    it('Deve retornar todos os Funcionários', function(done) {
        chai.request(server)
        .get('/employee')
        .end(function(error, res) {
            //Se tudo der certo deve retornar o status: 200 - OK
            res.should.have.status(200);
            //E em seguida retornar em um array todos os funcionários cadastrados na base de dados:
            res.body.should.be.a('array');
            //res.body.length.should.be.eql(0);
        done();
        });
    });
});

/** 
 * Teste da rota: /POST
 */
describe('/POST employee', function() {
    it('Não deve retornar o POST do funcionário criado, uma vez que não foi definido o campo: email', function(done) {
       
        //Aqui simulamos a criação de um Funcionário, porém sem incluir o email:
        var employee = {
            name: "Glaucia Lemos",
            department: "Information Technology"
        }
        chai.request(server)
        .post('/employee')
        .send(employee)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('errors');
            res.body.errors.should.have.property('email');
            res.body.errors.email.should.have.property('kind').eql('required');
            done();
        });
    });
    
    it('Deve Criar um Funcionário', function(done) {
        var employee = {
            name: "Glaucia Lemos",
            email: "glaucia@luizalabs.com",
            department: "Information Technology"
        } 
        chai.request(server)
        .post('/employee')
        .send(employee)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Funcionário adicionado com Sucesso!');
            res.body.employee.should.have.property('name');
            res.body.employee.should.have.property('email');
            res.body.employee.should.have.property('department');
        done();
        }); 
    });
});


/** 
 * Teste da rota: /GET/:id
 */
describe('/GET/:id employee', function() {
    it('Deve retornar um Funcionário dado o id', function(done) {
        var employee = new Employee({
            name: "Glaucia Lemos",
            email: "glaucia@luizalabs.com",
            department: "Information Technology"
        });
        employee.save(function(error, employee) {
            chai.request(server)
            .get('/employee/' + employee.id)
            .send(employee)
            .end(function(error, res) {
               res.should.be.a('object');
               res.body.should.have.property('name'); 
               res.body.should.have.property('email');
               res.body.should.have.property('department');
               res.body.should.have.property('_id').eql(employee.id);              
        done();
            });
        });
    });
});

/**
 * Teste da rota: /PUT/:id
 
describe('/PUT/:id employee', function(){
	  it('Deve atualizar um Funcionário dado o id', function(done){
	  	var employee = new Employee({name: "Jurema Lemos", email: "jurema@luizalabs.com", department: "Customer"})
	  	employee.save(function(error, employee){
				chai.request(server)
			    .put('/employee/' + employee.id)
			    .send({name: "Jurema de Souza Lemos", email: "jurema@luizalabs.com", department: "Customer"})
			    .end(function(error, res){
				  	res.should.have.status(200);
				  	res.body.should.be.a('object');
				  	res.body.should.have.property('message').eql('Funcionário Atualizado com Sucesso!');
                    res.body.employee.should.have.property('name').eql('Jurema de Souza Lemos');
	            done();
            });
        });
    });
});
*/

/** 
 * Teste da rota: /DELETE/:id
 */
describe('/DELETE/:id empoloyee', function(){
	  it('Deve excluir um Funcionário dado o id', function(done){
	  	var employee = new Employee({name: "Jurema Lemos", email: "ju@luizalabs.com", department: "Customer"})
	  	employee.save(function(error, employee){
				chai.request(server)
			    .delete('/employee/' + employee.id)
			    .end(function(error, res){
				  	res.should.have.status(200);
				  	res.body.should.be.a('object');
				  	res.body.should.have.property('message').eql('Funcionário excluído com Sucesso!');
			      done();
			    });
		  });
	  });
   });
});
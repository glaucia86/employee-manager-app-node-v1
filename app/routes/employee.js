 /*
 * Arquivo: routes/employee.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelas rotas das APIS
 * Data: 13/02/2017
 */

var mongoose = require('mongoose');
var Employee = require('../models/employee');

/* 1) Método: Selecionar Funcionários (acessar em: GET http://localhost:8000/employee */
    function selecionarTodosFuncionarios(req, res) {

        //Aqui estamos definindo a query do banco para que possa retornar todos os funcionários:
        var query = Employee.find({});
        query.exec(function(error, employees) {
            if(error)
                res.send(error);
            //Caso não haja erros, então retornará para o usuário:
            res.json(employees);
        });       
    }


/* 2) Método: Criar Funcionário (acessar em: POST http://localhost:8000/employee) */
    function adicionarFuncionario(req, res) {

        //Criamos um novo funcionario:
        var novoFunc = new Employee(req.body);

        //Aqui estaremos salvando todos os campos na base de dados:
        novoFunc.save(function(error, employee) {
            if(error) {
                res.send(error);
            } else {
                res.json({ message: "Funcionário adicionado com Sucesso!", employee });
            }
        });
    }

/** 3)  Método: Selecionar Por Id (acessar em: GET http://localhost:8000/employee/:id ) */ 
    function selecionarFuncionarioPorId(req, res) {
        Employee.findById(req.params.id, function(error, employee) {
            if(error)
                res.send(error);

                //Caso não haja erros, retornar para o usuário:
                res.json(employee);
        });
    }

/** 4) Método: Excluir (acessar em: http://localhost:8000/employee/:id ) */ 
    function excluirFuncionario(req, res) {
        Employee.remove({ _id: req.params.id }, function(error, resultado) {
            res.json({ message: "Funcionário excluído com Sucesso!", resultado });
        });
    }

/* 5) Método: Atualizar (acessar em: PUT http://localhost:8000/employee/:id ) */
    function atualizarFuncionario(req, res) {
        //Para que eu possa atualizar um Funcionário, preciso primeiramente encontrar o id do Funcionário que desejo atualizar:
        Employee.findById({ _id: req.params.id }, function(error, employee) {
            if(error)
                res.send(error);
            
            //Caso não haja erros, retornar a atualização para o usuário:
            Object.assign(employee, req.body).save(function(error, employee) {
                if(error)
                    res.send(error);
                res.json({ message: "Funcionário Atualizado com Sucesso", employee });
            });
        });
    }

//Aqui iremos exportar todas as funções criadas acima:
module.exports = { selecionarTodosFuncionarios, adicionarFuncionario, selecionarFuncionarioPorId, excluirFuncionario, atualizarFuncionario };
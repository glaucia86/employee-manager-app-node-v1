/*
 * Arquivo: routes/employee.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelas rotas das APIS
 * Data: 13/02/2017
 */

var mongoose = require('mongoose');
var Employee = require('../models/employee');

/* 1) Método: GetAll (Selecionar Todos Funcionários) (acessar em: GET http://localhost:8000/employee */
    function getAll(req, res) {

        //Query para retornar todos os funcionários:
        var query = Employee.find({});
        query.exec(function(error, employees) {
            if(error)
                res.send(error);
            res.json(employees)
        });       
    }

/* 2) Método: Create Employee (acessar em: POST http://localhost:8000/employee) */
    function addEmployee(req, res) {

        //Criando um novo Funcionário:
        var newEmployee = new Employee(req.body) {
            newEmployee.save(function(error, Employee) {
                if(error) {
                    res.send(error);
                } else {
                    res.json({ message: "Employee added successfully!" });
                }
            });
        }

/** 3)  Método: GetById (acessar em: GET http://localhost:8000/employee/:id ) */
    function getById(req, res) {
        Employee.findById(req.params.id, function(error, employee) {
            if(error)
                res.send(error);
 
                //Caso não haja erros, retornar para o usuário:
                res.json(employee);
        });
    }

/** 4) Método: DeleteEmployee (acessar em: DELETE http://localhost:8000/employee/:id ) */
    function deleteEmployee(req, res) {
        Employee.remove({ _id: req.params.id }, function(error, resultado) {
            res.json({ message: "Employee deleted successfully!", resultado });
        });
    }

/* 5) Método: UpdateEmployee (acessar em: PUT http://localhost:8000/employee/:id ) */
    function updateEmployee(req, res) {
        //Para que eu possa atualizar um funcionário, preciso primeiramente encontrar o id do funcionário que desejo atualizar:
        Employee.findById({ _id: req.params.id }, function(error, employee) {
            if(error)
                res.send(error);
 
            //Caso não haja erros, retornar a atualização para o usuário:
            Object.assign(employee, req.body).save(function(error, employee) {
                if(error)
                    res.send(error);
                res.json({ message: "Employee updated successfully!", employee });
            });
        });
    }

//Aqui iremos exportar todas as funções criadas acima:
module.exports = { getAll, addEmployee, getById, deleteEmployee, updateEmployee };
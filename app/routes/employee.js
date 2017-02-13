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
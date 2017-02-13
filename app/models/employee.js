/**
 * Arquivo: models/employee.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelo modelo do 'Livro' para realizar a conexão com a base 
 *  de dados via Moongose.
 * Data: 13/02/2017
 */

var mongoose = require('mongoose');
var validator = require('validator');
var Schema = mongoose.Schema;

//Classe Modelo: Employee
var EmployeeSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, validate: [isEmail, 'invalid email'] },
        department: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

//Aqui realizará a exportação do 'LivroSchema' para usar em qualquer lugar:
module.exports = mongoose.model('employee', EmployeeSchema);
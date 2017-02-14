/**
 * Arquivo: models/employee.js
 * Author: Glaucia Lemos
 * Description: Arquivo responsável pelo modelo do 'Employee' para realizar a conexão com a base 
 *  de dados via Moongose.
 * Data: 13/02/2016
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Aqui vem a definição da esquema do 'Employee':
var EmployeeSchema = new Schema(
    {
        name: { type: String, required: true },
        email:{ type: String, required: true },
        department: { type: String, required: true },
    },
    {
        versionKey: false
    }
);

//Aqui realizará a exportação do 'EmployeeSchema' para usar em qualquer lugar:
module.exports = mongoose.model('employee', EmployeeSchema);
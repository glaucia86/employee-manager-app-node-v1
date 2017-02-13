/**
 * Arquivo: server.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a nossa aplicação.
 * Data: 13/02/2017
 */

var express = require('express');
var app = express();
var mongoose = require(mongoose);
var bodyParser = require('body-parser');
var port = 8000;
var employee = require('./app/routes/employee');
var config = require('config'); //->> aqui estaremos carregando a localização da base de dados através dos arquivos JSON.
 
//Opção das bases de dados:
moongose.connect(config.DBHost, options);
var db = moongose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar com a Base de Dados '));

//Os Logs dos Testes realizados:
if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get("/", (req, res)=> res.json({ message: "Welcome to Luizalabs Employee Manager Application" }));

//Definindo as rotas para: GET & POST:
app.route("/employee")
    .get(employee.getAll)
    .post(employee.addEmployee);

app.route("/employee/:id")
    .put(employee.getById)
    .delete(employee.deleteEmployee)
    .put(employee.updateEmployee);

app.listen(port);
console.log("Aplicação executando na porta " + port);

module.exports = app;

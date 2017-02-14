/**
 * Arquivo: server.js
 * Author: Glaucia Lemos
 * Description: Arquivo principal e responsável por executar a nossa aplicação.
 * Data: 13/02/2017
 */

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = 8000;
var employee = require('./app/routes/employee');
var config = require('config'); // aqui estaremos carregando a localização da base de dados através dos arquivos JSON.

//Opção das base de dados:
var options = { 
                server:{ socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 }}, 
                replset:{ socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 }} 
              };

//Conexão com a base de dados:
mongoose.connect(config.DBHost, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar com a Base de Dados....: '));

//Essa parte do código estaremos mostrando os logs quando acontecer os testes:
if(config.util.getEnv('NODE_ENV') !== 'test') {

    //Aqui estamos usando 'morgan'. Ele é responsável por realizar as requisições de logger no middleware para Node.Js
    app.use(morgan('combined')); 
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get("/", (req, res) => res.json({message: "Welcome to LuizaLabs Manager Employee Application"}));

//Definição das rotas para: GET & POST:
app.route("/employee")
	.get(employee.selecionarTodosFuncionarios)
	.post(employee.adicionarFuncionario);

//Definição das rotas para: GET, DELETE & PUT
app.route("/employee/:id")
	.get(employee.selecionarFuncionarioPorId)
	.delete(employee.excluirFuncionario)
	.put(employee.atualizarFuncionario);

app.listen(port);
console.log("Aplicação executando na porta " + port);

module.exports = app;



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

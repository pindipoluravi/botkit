var Application = require("./lib/app");
var Server = require("./lib/server");
var sdk = require("./lib/sdk");
var config = require("./config");
var request = require('request');
var express          = require('express');

var app = new Application(null, config);
var server = new Server(config, app);

server.start();

sdk.registerBot(require('./CitiWebhook.js'));

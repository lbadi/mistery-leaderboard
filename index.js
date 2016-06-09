var express = require('express');
var router = express.Router();
var bodyParser  = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var leaderBoard = require('./leaderboard');
var config = require('./config/database');

mongoose.connect(config.database, {config:{autoindex: config.autoindex}});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/leaderBoard',leaderBoard);

app.listen(port);

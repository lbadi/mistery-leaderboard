var express = require('express');
var router = express.Router();
var Record = require('./models/record');

var leaderboard = [{name: 'Diego', time: 6}, {name: 'Juan', time: 2} , {name: 'Pedro', time: 5}];

router.get('/', function(req,res){
	var sortedLeaderboard = leaderboard.sort(function(a,b){
		return a.time - b.time;
	});
	var max = 10;
	if(!req.query.max){
		max = req.query.max;
	}
	Record.find()
					.sort({ time : 1})
					.limit(max)
					.exec(function(err,records){
		if(err){
			res.status(500).send();
		}
		res.json(records);
	});
});

router.post('/', function(req,res){
	if(!req.body.name || !req.body.time){
		res.status(400).send();
	}
	var newRecord = new Record({
		name: req.body.name ,
		time: req.body.time
	});
	newRecord.save(function(err){
		if(err){
			res.status(500).send();
		}
	});
	res.status(201).send();
});


module.exports = router;
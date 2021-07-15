var express = require('express')
var router = express.Router();
var con = require('../db/connection')

router.get('/', function (req, res){
    const sql = "select * from tickets"
    con.query(sql, function(err, result){
        if(err) throw err; 
        res.json(result);
    })
})
router.get('/update/:id/:to', function (req, res){
    const {id, to} = req.params;
    const sql = "UPDATE `tickets` SET `lane` = '"+to+"' WHERE `tickets`.`id` = "+id+"";
    con.query(sql, function(err,result){
        if(err){ throw err}
        res.json(result);
    })
})
router.get('/delete', function(req, res){
    const {id} = req.body;
    const sql = "DELETE FROM `tickets` WHERE `tickets`.`id` = "+id+"";
    con.query(sql, function(err, result){
        if(err){ throw err}
        res.json(result);
    })
})
router.post('/edit', function(req, res){
    const {id, description, title } = req.body;
    const sql = "UPDATE `tickets` SET `title` = '"+title+"', `body` = '"+description+"' WHERE `tickets`.`id` = "+id+"";
    con.query(sql, function(err,result){
        if(err){ throw err}
        res.json(result);
    })
})
router.post('/add', function(req, res){
    const {title, body, lane, User_idUser} = req.body;
    const sql = "INSERT INTO `tickets` (`title`, `User_idUser`, `body`, `lane`) VALUES ('"+title+"', '"+User_idUser+"', '"+body+"', '1')";
    con.query(sql, function(err, result){
        if(err){ throw err}
        res.json(result);
    })
})

module.exports = router;

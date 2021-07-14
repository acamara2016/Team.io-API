var express = require('express')
var router = express.Router();
var con = require('../db/connection')

router.get('/', function (req, res){
    const sql = "select * from User"
    con.query(sql, function(err, result){
        if(err) throw err; 
        res.json(result);
    })
})
module.exports = router;

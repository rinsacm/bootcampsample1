var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});

router.post('/', function(req, res, next) {

  let username=req.body.username;
  let password=req.body.password;
  console.log(username);
  console.log(password);
    let url='mongodb://localhost:27017'
    mongoClient.connect(url,function (err,client) {
        if(err)
            console.log('database connection error : '+err)
        else
        {
            let mydb=client.db('mysample');
            if(mydb)
            {
                console.log('connected');
                mydb.collection('person').findOne({username:username,password:password},function(err,result){
                    if(err)
                    {
                        console.log('error ');

                    }
                    else {
                        if(result){
                            console.log('login success')
                        }
                        else
                        {
                            console.log('login failed')
                        }
                    }
                })
            }
        }
    })
});

module.exports = router;

var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;
router.get('/', function(req, res, next) {

    res.render('signup');
});
router.post('/',function (req,res) {
    let firstname=req.body.firstname;
    let secondname=req.body.lastname;
    let username=req.body.username;
    let password=req.body.password;
    console.log(username);
    let url='mongodb://localhost:27017'
    mongoClient.connect(url,function (err,client) {
        if(err)
           console.log('database connection error : '+er)
        else
        {
            let mydb=client.db('mysample');
            if(mydb)
            {
                console.log('connected');
                mydb.collection('person').insertOne({firstname:firstname,secondname:secondname,username:username,password:password},function(err,result){
                    if(err)
                    {
                        console.log('error: '+err);

                    }
                    else
                        console.log('inserted');
                        res.redirect('/')
                })
            }
        }
    })
})
module.exports = router;
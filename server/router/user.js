const userRouter = require('express').Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

userRouter.route('/user/add').post((req, res) => {
    
    let db_connect = dbo.getDb("MoviesNow");
    let userObj = {
        userid: req.body.userid,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
    }
    db_connect.collection("User").insertOne(userObj, function (err, result) {
        if (err) throw err;
        res.json(result);
    })
});


userRouter.route('/user/update/:id').post((req, res) => {
    
    let db_connect = dbo.getDb("MoviesNow");
    let query = { userid:req.params.id };
    let newvalues = {
        $set: {
            userid: req.body.userid,
            email: req.body.email,
            phone: req.body.phone,
            username: req.body.username,
        },
    };

    db_connect
        .collection("User")
        .updateOne(query, newvalues, function (err, result) {
            if (err) throw err;
            console.log("updated user");
            res.json(result);
        })
});

module.exports = userRouter;
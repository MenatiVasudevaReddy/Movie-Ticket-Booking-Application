const movieRouter = require('express').Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

movieRouter.route('/movie/:id').get((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query ={ moviename:req.params.id} ;
    db_connect
        .collection("Movies")
        .findOne(query, function (err, result) {
            if (err)
            {
                console.log(err);
            }
            res.json(result)
        })
   
});

movieRouter.route('/movie/:id/:res').get((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query ={moviename:req.params.id} ;
    db_connect
        .collection("Movies")
        .findOne(query, function (err, result) {
            if (err)
            {
                console.log(err);
            }
            res.json(result)
        })
   
   
});
movieRouter.route('/movie').get((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    db_connect
        .collection("Movies")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result)
        })
});

module.exports = movieRouter;
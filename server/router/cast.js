const castRouter = require('express').Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

castRouter.route('/cast').get((req, res) => {
    
    let db_connect = dbo.getDb("MoviesNow");
    db_connect
        .collection("Cast")
        .find({})
        .toArray(function (err, result)  {
            if (err) throw err;
            res.json(result);
        })
})
castRouter.route('/cast/:id').get((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query = { moviename:req.params.id };
    db_connect
        .collection("Cast")
        .findOne(query, function (err, result) {
            if (err) throw err;
            res.json(result);
        })
})

module.exports = castRouter;


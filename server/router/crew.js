const crewRouter = require('express').Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;


crewRouter.route('/crew/:id').get((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query = { moviename: req.params.id };
    db_connect
        .collection("Crew")
        .findOne(query, function (err, result) {
            if (err) throw err;
            res.json(result);
        })
})

module.exports = crewRouter;


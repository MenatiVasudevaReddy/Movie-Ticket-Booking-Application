const theatreRouter = require('express').Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

theatreRouter.route('/theatre').get((req,res)=> {
    let db_connect = dbo.getDb("MovieTicketBooking");
    db_connect
        .collection("Theatre")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        })
});

theatreRouter.route('/theatre/:id').get((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query = {theatrename :req.params.id}
    db_connect
        .collection("Theatre")
        .findOne(query, function (err, result) {
            if (err) throw err;
            res.json(result);
        })
});

module.exports = theatreRouter;

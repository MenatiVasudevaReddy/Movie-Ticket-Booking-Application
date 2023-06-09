const seatRouter = require('express').Router();
const dbo = require("../db/conn");

seatRouter.route('/seat/:id').get((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query = { theatrename: req.params.id }
    db_connect
        .collection("Seats")
        .findOne(query, function (err, result) {
            if (err)
            {
                console.log(err);
            }
            res.json(result);
        })
        
});

seatRouter.route('/seat/update/:id').post((req, response) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query = { theatrename: req.params.id }
    let newvalues = {
        $set: {
            seats: req.body.theatreSeats,
            theatrename:req.body.theatrename,
        },
    };
    
    db_connect
        .collection("Seats")
        .updateOne(query, newvalues, function (err, res) {
            if (err) throw err;
            console.log("seats updated");
            response.json(res);
    })
})

module.exports = seatRouter;
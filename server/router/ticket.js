const ticketRouter = require("express").Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

ticketRouter.route('/ticket/add').post((req, response) => {
    let db_connect = dbo.getDb("MoviesNow");
    let ticketObj = {
        ticketId: req.body.ticketId,
        moviename: req.body.moviename,
        print: req.body.print,
        language: req.body.language,
        theatrename: req.body.theatrename,
        location: req.body.location,
        time: req.body.time,
        date: req.body.date,
        seats: req.body.seats,
        totaltickets: req.body.totaltickets,
        concessionfee: req.body.concessionfee,
        total: req.body.total,
        booked: req.body.booked
    };
    db_connect.collection("Ticket").insertOne(ticketObj, function (err, res) {
        if (err) throw err;
        response.json(res);

    })
});

ticketRouter.route('/ticket/update/:id').post((req, response)=>{
    let db_connect = dbo.getDb("MoviesNow");
    let query = { ticketId:req.params.id};
    let newvalues = {
        $set: {
            ticketId: req.body.ticketId,
            moviename: req.body.moviename,
            print: req.body.print,
            language: req.body.language,
            theatrename: req.body.theatrename,
            location: req.body.location,
            time: req.body.time,
            date: req.body.date,
            seats: req.body.seats,
            totaltickets: req.body.totaltickets,
            concessionfee: req.body.concessionfee,
            total: req.body.total,
            booked: req.body.booked
        },
    };

    db_connect
        .collection("Ticket")
        .updateOne(query, newvalues, function (err, res) {
            if (err) throw err;
            console.log("updated ticket");
            response.json(res);
        })

})
ticketRouter.route('/ticket/:id').get((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query = { ticketId : req.params.id };
    db_connect
        .collection("Ticket")
        .findOne(query, function (err, result) {
            if (err)
                console.log(err);
            res.json(result);
        })
})

ticketRouter.route('/ticket').delete((req, res) => {
    let db_connect = dbo.getDb("MoviesNow");
    let query = { booked:false};

    db_connect
        .collection("Ticket")
        .deleteMany(query, function (err, obj) {
            if (err) throw err;
            console.log("ticket data deleted");
            res.status(obj);
        })

})

module.exports = ticketRouter;
const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });

const port = process.env.port || 5000;
app.use(cors());
app.use(express.json());

app.use(require("./router/movie"));
app.use(require("./router/theatre"));
app.use(require("./router/ticket"));
app.use(require("./router/user"));
app.use(require("./router/crew"));
app.use(require("./router/cast"));
app.use(require("./router/seats"));

const dbo = require("./db/conn");

app.listen(port, () => {
    
    dbo.connectToServer(function (err) {
        if (err)
            console.log(err);
    });

    console.log("Server is running");
    
})


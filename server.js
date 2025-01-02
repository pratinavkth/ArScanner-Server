const express = require("express");
const dotenv = require("dotenv");
const imagegerativeRouter = require("./imagetextgenerate");

const app = express();
app.use(express.json());
dotenv.config();

app.use(imagegerativeRouter);

app.listen(process.env.PORT,
    ()=>{
        console.log(`running on the port ${process.env.PORT}`)
    }
);

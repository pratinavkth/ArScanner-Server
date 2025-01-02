const express= require("express");
const  geminichatai  = require("./chatgeminimodel");

const imagegerativeRouter = express.Router();

imagegerativeRouter.post("/texttotext",async(req,res)=>{
    try{
        console.log("imagetext intercepted");
        const messge = req.body;
        const message = JSON.stringify(messge);
        console.log(message);
        console.log(typeof message);
        const response = await geminichatai(message);
        console.log("Response from Gemini:", response);
        res.json(response);


    }catch(e){
        console.error("Error in /gemini route:", e);
        res.status(500).json({ error: "Internal Server Error" });

    }
    

});

module.exports = imagegerativeRouter;
// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDb from "./db/index.js";

dotenv.config({
    path: '../env'
})

connectDb()


/*
import express from "express";

const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (err) => {console.log(err)
            throw err
        }
        )
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${PORT}`);      
        })
    }
    catch(err){
        console.error("ERROR: ", err);
        throw err      
    }
})()
*/
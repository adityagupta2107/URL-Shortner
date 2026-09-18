import express from 'express'
import dotenv from 'dotenv'
import auth_routes from './src/route/auth.routes.js'
import connectDB from './src/config/mongo.config.js'
import short_Url from './src/route/shortUrl.route.js'
import { redirectFromShortUrl } from './src/controler/shorturl.controller.js'
import cors from 'cors'
dotenv.config();

const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors());
app.use("/api/auth",auth_routes)
app.use("/api/create",short_Url);
app.get("/:id", redirectFromShortUrl)

app.listen(3000,()=>{
    connectDB()
    console.log("server is Running in port https:");
})


//Get - Redirection
//Post - Create short URL
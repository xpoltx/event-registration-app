import express from "express";

import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import router from "./routes/router";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../../client')));
app.use('/', router());
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});


mongoose.connect(process.env.DATABASE || '').then(()=>{
    console.log("Connected successfully");
});

mongoose.connection.on('error', (error: Error) => console.log(error));

app.listen(process.env.PORT, ()=>{
    console.log("server running");
});

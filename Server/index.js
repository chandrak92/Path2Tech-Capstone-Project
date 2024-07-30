// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";;
// import { User } from "./Models/userSchema.js";

// dotenv.config();
// const app= express();

const dotenv = require("dotenv").config()
const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
// const { User } = require("./Models/userSchema.js")

const app = express();

//database connection
mongoose.connect(process.env.SPECIAL_KEY)
.then(() => console.log("Database Connected"))
.catch((error) => console.log("Database not connected", error))

//middleware
app.use(express.json());
app.use(cookieParser);
app.use(express.urlencoded({ extended: false}));

app.use("/", require("./Routes/authRoutes"))

// const db= async() => {
//     try{
//         await mongoose.connect(`${process.env.SPECIAL_KEY}`)
//     } catch(error) {
//         console.log(error)
//     }
// }

// db()

// app.use(cors());
// app.use(express.urlencoded());

// app.post("/register", async (req, res) =>{
//     try{
//         const user= new User(req.body);
//         const savedUser= await user.save();
//         res.json(savedUser);
//     } catch(error) {
//         res.status(500).json(error);
//     }
// });

// app.post("/login", async (req, res) =>{
//     try{
//         const user= await User.find({email: req.body.email});
//         if(req.body.password === user.password) {

//         } else {

//         }
//     } catch(error) {
//         res.status(500).json(error);
//     }
// });

//app.post for quiz points

//app.post for contact

// app.get("/users/:id", async (req, res) =>{
//     try{
//         console.log(req.params.id);
//         const user= await User.findById(req.params.id)
//         res.json(user)
//     } catch(error) {
//         res.status(500).json(error);
//     }
// });

const port = 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
// app.listen(4000, () => {console.log("listening")});
// import mongoose from "mongoose";
const mongoose = require("mongoose")
// const { Schema } = mongoose

const userSchema= new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    birthDate: {
        type: Number,
    },
    // points: {
    //     type: Number,
    // },
    profileImage:
    {
        data: Buffer,
        contentType: String
    }
    // "username":{"type":"String", "required":true},
    // "password":{"type":"String", "required":true},
    // "firstName":{"type":"String", "required":true},
    // "lastName":{"type":"String"},
    // "email":{"type":"String", "required":true},
    // "birthDate":{"type":"Number"}
})

const User= mongoose.model("User", userSchema);

module.exports = { User }
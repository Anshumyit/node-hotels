const mongoose=require('mongoose');


// defone the person schema

const personSchma = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    age:{
        type:Number,
    },

    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },

    mobile:{
        type:String,
        required:true,
       
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },

    address:{
        type:String,
    },

    salary:{
        type:String,
        required:true
    }
})

// create Person Module

const Person =mongoose.model('Person',personSchma );
module.exports =Person;
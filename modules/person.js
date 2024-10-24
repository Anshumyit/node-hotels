const mongoose=require('mongoose');
const bcrypt  = require('bcrypt')


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
        // unique:true
    },

    address:{
        type:String,
    },

    salary:{
        type:String,
        required:true
    },
    username:{
        required:true,
        type:String
        
    },

    password:{
        required:true,
        type:String
    }
})

// password squre

personSchma.pre('save', async function(next){
    const person = this;

    // Hash the password only if it has been modified (or is new)
    if(!person.isModified('password')) return next();

    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);
        
        // Override the plain password with the hashed one
        person.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
})

personSchma.methods.comparePassword = async function(candidatePassword){
    try{
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

// create Person Module

const Person =mongoose.model('Person',personSchma );
module.exports =Person;
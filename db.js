const mongoose = require('mongoose');

// Define the MongoDB connection URL

const  mongoURL ='mongodb://localhost:27017/hotels'  //Replace the databse name like hotels


// set  up MongoDB connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


// get the deafult  connection
// Mongoose maintains a deafult connection  objet represeting the MongoDB connection

const db =mongoose.connection

// Define event  listeners for database connetion

db.on('connected',()=>{
    console.log('Connected mongodb server');
    
})

db.on('error',(error)=>{
    console.log('mongodb connection error', error);
    
})


db.on('disconnected',(disconnected)=>{
    console.log('mongodb disconnected',disconnected);
    
})


// Export the database connection

module.exports=db;
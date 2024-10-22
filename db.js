const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL

//const  mongoURL ='mongodb://localhost:27017/hotels'  //Replace the databse name like hotels
//  const mongoURL ='mongodb+srv://raghuveersonkar64:Raghu1234@cluster0.ow6tc.mongodb.net/'
 const mongoURL=process.env.DB_URL;


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

const express = require('express')
const app = express()
const db=require('./db')
require('dotenv').config();
const passport=require('./auth');


const bodyParser=require('body-parser');
app.use(bodyParser.json());  // req.body
const PORT=process.env.PORT || 300

// Middleware Function
const logRequest =(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] Request Made to :${req.originalUrl}`);
  next();  // Move on to the next phase
  
}
 app.use(logRequest)




  app.use(passport.initialize());
  const Localmiddleware=passport.authenticate('local',{session:false});

 app.get('/', function (req, res) {
  res.send('Hello World')
 });

// app.get('/chicken',function(req,res){
//     var customer={
//         name:'Shai ram',
//         kg:'1 Kg',
//         price: 2000,
//         address:'varanasi'
//     }
//     res.send(customer);
// })

// app.post('/person',(req,res)=>
//   res.send('nice to meet you')
// )


//Import the router files

  const personRouter=require('./router_modules/personRouters');
  const menuRouter1=require('./router_modules/menuRouters');
 


  // Use the routers
  app.use('/person',Localmiddleware,personRouter)
  app.use('/menuitems',menuRouter1);
  

// app.listen(300,()=>console.log('live server'))
app.listen(PORT,()=>console.log('listening on port',PORT));
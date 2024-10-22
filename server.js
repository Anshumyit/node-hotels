
const express = require('express')
const app = express()
const db=require('./db')
// require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const PORT=process.env.PORT ||300





app.get('/', function (req, res) {
  res.send('Hello World')
})

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
  app.use('/person',personRouter)
  app.use('/menuitems',menuRouter1);
  

// app.listen(300,()=>console.log('live server'))
app.listen(PORT,()=>console.log('listening on port 300'))
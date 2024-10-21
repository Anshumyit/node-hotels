const express=require('express');
const router=express.Router();

const Person=require('../modules/person');

   // post method

router.post('/',async(req,res)=>{

    try{
  
     // const {name,age,work , mobile ,email,address,salary}=req.body;
      const data=req.body;

      console.log(req.body)
      // create the new person document using the Mongoose model
      // const newPerson= new Person({name,age,work,mobile ,email,address,salary});
      const newPerson= new Person(data);
    
      // Save the new  person to the database
       const response=await newPerson.save();
       console.log('data saved');
       res.status(200).json(response)
       
  
    }catch(er){
  
      console.log(er);
      res.status(500).json({er:"internet server is busy"})
      
  
    }
      
    })


   // get method 

    router.get('/', async (req,res)=>{
        try {
            const data =await Person.find();
            console.log('data fetched');
            res.status(200).json(data);
            
        } catch (error) {
          console.log(error);
          res.status(500).json({error:'Internet Server Error'})
          
          
        }
      }),

      // put api method 

      router.put('/:id',async(req,res)=>{
        try{
          const personId=req.params.id;  // Extract the id from the url parameters
          const updatedPersonData=req.body; //Updated data for the person

          const response =await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new :true,  // Return the updated document
            runValidators:true,  // Run Mongoose Validation
          })
          if(!response){
            return res.status(404).json({error:'Person not found'});
          }

          console.log('data updated');
          res.status(200).json(response);
        } catch(err){
          res.status(500).json({error:'Internal Server Error'});
        }
      }),

      // Deleted APi

      router.delete('/:id',async(req,res)=>{
        try {

          const persond=req.params.id;
          const deletedata=req.body;

          const response =await Person.findByIdAndDelete(persond,deletedata,{
            new:true,
            runValidators:true,
          })
          if(!response){
            return res.status(404).json({error:"Person not found"});
          }

          console.log('Data deletd');
          res.status(200).json(response);
          
        } catch (error) {
          res.status(500).json({error:'Internal Server Error'})
          
        }
      })



      module.exports=router
  
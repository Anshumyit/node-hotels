const passport=require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./modules/person');


passport.use(new LocalStrategy(async (UserName ,password, done)=>{
    // authentication  logic here
    try {
       // console.log('Received credential:', UserName, password);
        const user = await Person.findOne({username:UserName});
        // console.log('UserName',user);
        
        if(!user){
          return done(null,false, {message :'Incorrect username.'});
        }
         
         const isPasswordMatched =user.password===password ? true : false;
          console.log(isPasswordMatched)
          if(isPasswordMatched){
          return done(null, user);
         }else{
          return done (null ,false,{message :'Incorrect password.'})
         }
        
      
    } catch (error) {
       return done(error)
    }
 }));


 module.exports=passport;  //Export configurd passport
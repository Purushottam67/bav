const express=require('express');
const app=express();
const PORT=8000;
const cors=require('cors')

async function mm(req,res){
    try{
        return res.status(200).json({message:"Hello This is successful"})
    }catch(err){
        return res.status(404).json({Message:`Error in mm function ${err}`})
    }
}
app.use(express.json({
    limit:'30mb',
    extended:true
}))
app.use(express.urlencoded({
    limit:'30mb',
    extended:true
}))
app.use(cors());



app.use('/',require('./routes'));


const mongoose=require('mongoose');

const CONNECT_URL='mongodb+srv://pu__rush__78:pu__rush__78@cluster0.zesgfmf.mongodb.net/?retryWrites=true&w=majority';



mongoose.set('strictQuery',false);

mongoose.connect(CONNECT_URL)
.then(()=> app.listen(PORT,()=>{
    console.log("mongoose connected and server is up running on port",PORT);
})).catch((err)=>{
    console.log(err)
});




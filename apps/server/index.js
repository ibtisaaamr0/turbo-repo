
const express=require("express");
const cors=require("cors")
const db=require("./db")

const app=express();

app.use(cors({origin:'*'}));
app.use(express.json());

app.post("/api/contact", (req,res)=>{
  const {name, email,message}=req.body;

  const query =`
  INSERT INTO contacts(name , email , message)
  VALUES(? , ?, ?)`
  
  db.run(query, [name,email,message],function(err){
    if(err)
    {
      return res.status(500).json("error")
    }
    else{
      return res.status(200).json({message:"Data stored"})
    }
  })
});

app.get("/", (req, res) =>{
  return res.status(200).json({status: "Success"})
})


app.listen(5000,()=>{
  console.log("port running on http://localhost:5000")
});
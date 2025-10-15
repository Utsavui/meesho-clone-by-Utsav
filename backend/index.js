import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
const app = express();
const port =process.env.PORT || 4000
app.use(cors());  // CORS enable
app.use(express.json());
app.use(bodyParser.json())

app.use("/imgs",express.static("imgs"));




app.get("/", (req, res) => {

  res.send("hi")
});
app.post("/api/form",(req,res)=>{
const data=req.body
console.log(data)
res.send({messge:"data Received",data})
});
app.get("/api/form",(req,res)=>{
const data=req.body
console.log(data)
res.send(data)
});

app.get("/api/foryou",async (req, res) => {
  const products= await JSON.parse(fs.readFileSync("./data/foryou.json","utf-8"))
try {
if(products){
  res.send(products)
}
  
} catch (error) {
  res.send(error)
}
 
});

app.get("/search",(req,res)=>{
  const products=  JSON.parse(fs.readFileSync("./data/products.json","utf-8"))
  try {
    console.log("Request received:", req.query);
    const query = (req.query.query || "").toLowerCase();

    console.log('Received query:', query);

    const filtered = products.filter(item =>
      item.text.toLowerCase().includes(query)
    );

    if(filtered.length>0){
      res.send(filtered)
    }
    else{
     res.send(products)
    }
  
  } catch (error) {
    res.send('Server Error:', error);
    
    
  }
});

app.get("/Allsaree",(req,res)=>{
  const allsaree=JSON.parse(fs.readFileSync("./data/Allsaree.json","utf-8"))
res.send(allsaree)
})
app.get("/Women",(req,res)=>{
  const sarees={saree:["All Saree","silk saree"],
               kurtis:["All kurti","silk kurti"]
  }
res.send(sarees)
})
app.get("/Western",(req,res)=>{
  const sarees={Westernsaree:["All Saree","Western silk saree"],
               Westernkurtis:["All kurti","Western silk kurti"]
  }
res.send(sarees)
})
app.get("/Men",(req,res)=>{
  const sarees={Westernsaree:["All Saree","Western silk saree"],
               Westernkurtis:["All kurti","Western silk kurti"]
  }
res.send(sarees)
})
app.get("/Kitchen",(req,res)=>{
  const sarees={Westernsaree:["All Saree","Western silk saree"],
               Westernkurtis:["All kurti","Western silk kurti"]
  }
res.send(sarees)
})
app.get("/kids",(req,res)=>{
  const sarees={Westernsaree:["All Saree","Western silk saree"],
               Westernkurtis:["All kurti","Western silk kurti"]
  }
res.send(sarees)
})
app.get("/jewllary",(req,res)=>{
  const sarees={Westernsaree:["All Saree","Western silk saree"],
               Westernkurtis:["All kurti","Western silk kurti"]
  }
res.send(sarees)
})
app.get("/Health",(req,res)=>{
  const sarees={Westernsaree:["All Saree","Western silk saree"],
               Westernkurtis:["All kurti","Western silk kurti"]
  }
res.send(sarees)
})





app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});












app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});

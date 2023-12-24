import express  from "express";
import cookieParser from "cookie-parser";
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.get("/api/jokes", (req,res) =>{
    // res.send("server is ready")
    const jokes = [
    {name:"surya", class:"five"}, 
    {name:"sohail", class:"six"},
    {name:"jafar", class:"sevens"}
]

res.send(jokes)
} )

app.post('/api/login', (req, res) => {
    const  data  = req.body;
    console.log('Received data:', data);
    res.json({ success: true });
  });

  app.post('/api/password-gen', (req, res) => {
    const  data  = req.body;
    console.log('Received data:', data);
    res.json({ success: true });
  });

  export{app}
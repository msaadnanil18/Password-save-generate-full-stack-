import express  from "express";
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/api/jokes", (req,res) =>{
    // res.send("server is ready")
    const jokes = [
    {name:"surya", class:"five"}, 
    {name:"sohail", class:"six"},
    {name:"jafar", class:"seven"}
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


const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})





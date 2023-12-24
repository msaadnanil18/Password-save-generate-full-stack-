import Express  from "express";
import bodyParser from "body-parser"
const app = Express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    const { data } = req.body;
    console.log('Received data:', data);
    res.json({ success: true });
  });


const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})



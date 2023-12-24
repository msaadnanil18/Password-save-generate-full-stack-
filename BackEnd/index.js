import Express  from "express";

const app = Express()

app.get("/api/jokes", (req,res) =>{
    // res.send("server is ready")
    const jokes = [
    {name:"surya", class:"five"}, 
    {name:"sohail", class:"six"},
    {name:"jafar", class:"seven"}
]

res.send(jokes)
} )


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})
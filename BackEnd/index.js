import Express  from "express";

const app = Express()

app.get("/", (req,res) =>{
    res.send("server is ready")
} )


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})
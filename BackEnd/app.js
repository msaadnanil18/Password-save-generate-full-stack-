import express  from "express";
import cookieParser from "cookie-parser";
import { User } from "./schema/googleAuth.js";
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())



app.get("/api/auth", async(req,res) =>{

  try {
    const data = await User.find();
    res.json(data);
    
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });

  }
   
} )

app.post('/api/login',async (req, res) => {
  try {
    const  data  = req.body;
    const userData = new User(data);
    await userData.save()
    console.log('Received data:', data);
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
    
  });

  app.post('/api/password-gen', (req, res) => {
    const  data  = req.body;
    console.log('Received data:', data);
    res.json({ success: true });
  });


  export{app}
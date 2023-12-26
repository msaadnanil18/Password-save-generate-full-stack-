// import { User } from "../schema/googleAuth.js";
// import express  from "express";

// const routes = express.Router()

// routes.get("/api/auth", async(req,res) =>{

//     try {
//       const data = await User.find();
//       res.json(data);
      
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
  
//     }
     
//   } )
  
//   routes.post('/api/login',async (req, res) => {
//     try {
//       const  data  = req.body;
//       const userData = new User(data);
//       await userData.save()
//       console.log('Received data:', data);
//       res.json({ success: true });
//     } catch (error) {
//       console.error('Error saving data to MongoDB:', error);
//       res.status(500).json({ success: false, error: 'Internal Server Error' });
//     }
      
//     });
  
//     routes.post('/api/password-gen', (req, res) => {
//       const  data  = req.body;
//       console.log('Received data:', data);
//       res.json({ success: true });
//     });
  
//  export default routes
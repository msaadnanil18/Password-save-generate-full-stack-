// // https://blog.appsignal.com/2023/08/09/how-to-use-mongodb-and-mongoose-for-nodejs.html



// // import { app } from "../app.js";

// import mongoose , {Schema} from "mongoose";

// import Jwt from "jsonwebtoken";
// // import bcrypt from "bcrypt"

// const userSchema = new Schema(
//     {
//       name:{
//         type:String,
        
       
//       },
//       email:{
//         type:String,
       
       
//       },
//       given_name:{
//       type:String
//      },
//      email_verified:{
//         type:Boolean,
       
         
//      },
//      picture:{
//         type:String
//      },
//     fieldPassword:{
//       type:String,
//       requied:true,
//   },
//     password:{
//       type:String,
//       requied:true
//   }

//     },
//     {
//         timestamps:true
//     }
// )


// export const User = mongoose.model("User", userSchema)

// Import required modules
import mongoose, { Schema } from "mongoose";

// Define the user schema
const userSchema = new Schema(
  {
  //  userId:{ type: mongoose.Types.ObjectId },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true, 
      index: true,
    },
    given_name: {
      type:String
    },
    email_verified: {
      type: Boolean,
    },
    picture: {
      type: String,
    },
    passwordHistory: [
      {
        fieldPassword: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);


export const User = mongoose.model("User", userSchema);

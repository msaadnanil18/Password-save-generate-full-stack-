// https://blog.appsignal.com/2023/08/09/how-to-use-mongodb-and-mongoose-for-nodejs.html



// import { app } from "../app.js";

import mongoose , {Schema} from "mongoose";

import Jwt from "jsonwebtoken";
// import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
      name:{
        type:String,
        
        // unique:true,
        // lowecase:true,
        // trim:true,
        // index:true
      },
      email:{
        type:String,
        // requied:true,
        // unique:true,
        // lowecase:true,
        // trim:true,
       
      },
      given_name:{
        type:String,
        trim:true,
         index:true
     },
     email_verified:{
        type:Boolean,
        // requied:true,
         
     },
     picture:{
        type:String
     },
       password:{
          type:String
       },
       refreshToken:{
        type:String
       },

    },
    {
        timestamps:true
    }
)
// userSchema.pre("save" , async function(next) {
//     if(!this.isModified("password")) return next()
//   this.password = bcrypt.hash(this.password, 10) 
//   next()    
// })

// userSchema.methods.isPasswordCorrect = async function
// (password){
//     return await bcrypt.compare(password, this.password)      
// }

export const User = mongoose.model("User", userSchema)
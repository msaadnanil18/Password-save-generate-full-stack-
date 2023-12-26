import mongoose, {Schema} from "mongoose";

const psswordSchema = new Schema (
    {
        fieldPassword:{
            type:String,
            requied:true,
        },
        password:{
            type:String,
            requied:true
        }
    }
)


export const UserPssword = mongoose.model("UserPssword", psswordSchema)
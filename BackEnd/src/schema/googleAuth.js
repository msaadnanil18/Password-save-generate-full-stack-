import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required:true
    },
    email: {
      type: String,
      unique: true,
      index: true,
      required:true
    },
    given_name: {
      type: String,
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

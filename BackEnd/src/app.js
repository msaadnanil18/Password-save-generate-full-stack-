import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/userRouter.js";
import fs from "fs";
import path from "path";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", router);

export { app };

/* PORT = 8000
# MONGODB_URL = mongodb+srv://msaadnanil18:Msa130@cluster0.9vvwp5d.mongodb.net
MONGODB_URL = mongodb+srv://msaadnanil18:Msa130@cluster0.9vvwp5d.mongodb.net

    
     */

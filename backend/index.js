import express from "express";
// import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import  dotenv from "dotenv";

dotenv.config()

const app=express() 
const port=process.env.PORT || 8000

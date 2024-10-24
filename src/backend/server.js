import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './database/connectDB.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: "http://localhost:5173", credentials: true}))

app.use(express.json()); //Middleware para sa postman
app.use(cookieParser()); // parse ng cookie

app.use("/api/auth", authRoutes); // para magparse sa postman (reqbody)


app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
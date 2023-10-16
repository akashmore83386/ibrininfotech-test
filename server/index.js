import express from 'express';
import cors from 'cors';
import connectDB from './mongoose.js';
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

connectDB();

// define routes
app.use(userRouter);

const PORT = process.env.PORT || 5000;

// listen on port
app.listen(PORT, () => {
    console.log('Server listening on port', PORT)
})
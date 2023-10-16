import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" })

// initialisation of database
const connectDB = async () => {
  try {
    const CONNECTION_URL = process.env.DATABASE;
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database", error.message);
    process.exit(1);
  }
};

export default connectDB;
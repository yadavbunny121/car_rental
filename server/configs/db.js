import mongoose from "mongoose";

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB....");
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`);

    
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error);
  }
};

export default connectDB;
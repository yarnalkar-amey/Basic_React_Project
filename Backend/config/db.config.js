import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Database is connected at the host: ${connection.connection.host}`
    );
  } catch (error) {
    console.log("Error occured at db: " + error);
    process.exit(1);
  }
};

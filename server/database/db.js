import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
	const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mudsis6.mongodb.net/whatsapp?retryWrites=true&w=majority`;
	try {
		await mongoose.connect(URL, { useUnifiedTopology: true });
		console.log("Database connected successfully");
	} catch (error) {
		console.log("Error while connecting with the database");
	}
};

export default Connection;

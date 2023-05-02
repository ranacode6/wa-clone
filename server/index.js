import express from "express";
import Connection from "./database/db.js";
import Route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Server } from "socket.io";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);
Connection();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.resolve(__dirname, "../client/build")));
	app.get("/", (req, res) => {
		res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
	});
}

const PORT = process.env.PORT;

const server = app.listen(PORT, () =>
	console.log(`Server is running on PORT ${PORT}`)
);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
	},
});

let users = [];

const addUser = (userData, socketId) => {
	!users.some((user) => user.sub == userData.sub) &&
		users.push({ ...userData, socketId });
};

const getUser = (userId) => {
	return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
	console.log("user connected");

	socket.on("addUsers", (userData) => {
		addUser(userData, socket.id);
		io.emit("getUsers", users);
	});

	socket.on("sendMessage", (data) => {
		const user = getUser(data.receiverId);
		io.to(user.socketId).emit("getMessage", data);
	});
});

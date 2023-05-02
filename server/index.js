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

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname1, "../client/build")));
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname1, "../client/build/index.html"));
	});
}

const PORT = process.env.PORT;

const server = app.listen(PORT, () =>
	console.log(`Server is running on PORT ${PORT}`)
);

const io = new Server(server, {
	cors: {
		origin: "https://whatsapp-clone-five-orcin.vercel.app",
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

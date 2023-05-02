import express from "express";
import { addUser, getUsers } from "../controllers/user-controller.js";
import {
	newConversation,
	getConversations,
} from "../controllers/conversation-controller.js";
import { getMessages, newMessage } from "../controllers/message-controller.js";
import { uploadFile, getImage } from "../controllers/image-controller.js";
import upload from "../utils/upload.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversations);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getImage);

export default route;

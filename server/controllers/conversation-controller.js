import Conversation from "../models/conversation-model.js";

export const newConversation = async (req, res) => {
	try {
		const { senderId, receiverId } = req.body;
		const exist = await Conversation.findOne({
			members: { $all: [senderId, receiverId] },
		});

		if (exist) {
			return res.status(200).json("Conversation already exists");
		}

		const newConversation = new Conversation({
			members: [senderId, receiverId],
		});

		await newConversation.save();
		return res.status(201).json("Conversation saved successfully");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

export const getConversations = async (req, res) => {
	try {
		const { senderId, receiverId } = req.body;
		let conversation = await Conversation.findOne({
			members: { $all: [senderId, receiverId] },
		});
		return res.status(200).json(conversation);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

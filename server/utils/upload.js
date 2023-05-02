import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const storage = new GridFsStorage({
	url: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mudsis6.mongodb.net/whatsapp?retryWrites=true&w=majority`,
	options: { useUnifiedTopology: true, useNewUrlParser: true },
	file: (req, file) => {
		const match = ["image/png", "image/jpg"];
		if (match.indexOf(file.mimeType) === -1) {
			return `${Date.now()}-file-${file.originalname}`;
		}

		return {
			bucketName: "photos",
			fileName: `${Date.now()}-file-${file.originalname}`,
		};
	},
});

export default multer({ storage });

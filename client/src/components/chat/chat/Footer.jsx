import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { useEffect } from "react";
import { uploadFile } from "../../../service/api";

const Component = styled(Box)`
	height: 42px;
	width: 100%;
	background-color: #f0f2f5;
	display: flex;
	align-items: center;
	padding: 5px 16px;
	> * {
		margin-left: 15px;
		color: #5c6d76;
	}
`;

const Search = styled(Box)`
	background-color: #ffffff;
	border-radius: 18px;
	width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
	width: 100%;
	height: 20px;
	padding: 20px;
	padding-left: 25px;
	font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
	transform: rotate(45deg);
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
	useEffect(() => {
		const getImage = async () => {
			if (file) {
				const data = new FormData();
				data.append("name", file.name);
				data.append("file", file);

				let response = await uploadFile(data);
				setImage(response.data);
			}
		};
		getImage();
	}, [file, setImage]);

	const onFileChange = (e) => {
		setFile(e.target.files[0]);
		setValue(e.target.files[0].name);
	};
	return (
		<Component>
			<EmojiEmotionsOutlined />
			<label htmlFor="fileInput">
				<ClipIcon />
			</label>
			<input
				type="file"
				id="fileInput"
				style={{ display: "none" }}
				onChange={(e) => onFileChange(e)}
			/>
			<Search>
				<InputField
					placeholder="Type a message"
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={(e) => sendText(e)}
					value={value}
				/>
			</Search>
			<Mic />
		</Component>
	);
};

export default Footer;

import { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";

const Component = styled(Box)`
	display: flex;
	padding: 15px 0;
	cursor: pointer;
`;

const Image = styled(`img`)({
	width: 50,
	height: 50,
	borderRadius: "50%",
	padding: "0 15px",
});

const Container = styled(Box)`
	display: flex;
`;

const TimeStamp = styled(Box)`
	font-size: 12px;
	margin-left: auto;
	color: #9a8781;
	margin-right: 20px;
`;

const Text = styled(Box)`
	font-size: 14px;
	color: #667e9d;
`;

const Conversation = ({ user }) => {
	const { setPerson, account, newMessageFlag } = useContext(AccountContext);
	const [message, setMessage] = useState({});

	useEffect(() => {
		const getConversationDetails = async () => {
			const data = await getConversation({
				senderId: account.sub,
				receiverId: user.sub,
			});
			setMessage({ text: data?.message, timestamp: data?.updatedAt });
		};
		getConversationDetails();
	}, [account.sub, user.sub, newMessageFlag]);
	const getUser = async () => {
		setPerson(user);
		await setConversation({ senderId: account.sub, receiverId: user.sub });
	};
	return (
		<Component onClick={() => getUser()}>
			<Box>
				<Image src={user.picture} alt="dp" />
			</Box>
			<Box style={{ width: "100%" }}>
				<Container>
					<Typography>{user.name}</Typography>
					{message?.text && (
						<TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
					)}
				</Container>
				<Box>
					<Text>
						{message?.text?.includes("https")
							? "media"
							: message.text}
					</Text>
				</Box>
			</Box>
		</Component>
	);
};

export default Conversation;

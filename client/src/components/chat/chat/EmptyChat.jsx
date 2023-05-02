import { emptyChatImage } from "../../../constants/data";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
	background: #f0f2f5;
	height: 100vh;
	text-align: center;
	padding: 30px 0;
`;

const Container = styled(Box)`
	padding: 0 200px;
`;

const Image = styled("img")({
	height: 205,
	width: 360,
	marginTop: 100,
});

const Title = styled(Typography)`
	font-size: 32px;
	color: #41525d;
	font-family: inherit;
	font-weight: 400;
	margin: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
	font-size: 14px;
	color: #667781;
`;
const EmptyChat = () => {
	return (
		<Component>
			<Container>
				<Image src={emptyChatImage} alt="empty-chat" />
				<Title>WhatsApp Web</Title>
				<SubTitle>
					Send and receive messages without keeping your phone online.
				</SubTitle>
				<SubTitle>
					Use WhatsApp on up to 4 linked devices and 1 phone at the
					same time.
				</SubTitle>
			</Container>
		</Component>
	);
};

export default EmptyChat;

import { useContext } from "react";
import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
	height: 40px;
	display: flex;
	padding: 10px 16px;
	background: #f0f2f5;
	align-items: center;
`;

const Image = styled("img")({
	width: 40,
	height: 40,
	objectFit: "cover",
	borderRadius: "50%",
});

const Name = styled(Typography)`
	margin-left: 12px !important;
`;

const Status = styled(Typography)`
	margin-left: 12px !important;
	font-size: 12px;
	color: #5b758a;
`;

const RightContainer = styled(Box)`
	margin-left: auto;
	& > svg {
		padding: 8px;
		color: #54656f;
		font-size: 24px;
	}
`;

const ChatHeader = ({ person }) => {
	const { activeUsers } = useContext(AccountContext);
	return (
		<Header>
			<Image src={person.picture} alt="dp" />
			<Box>
				<Name>{person.name}</Name>
				<Status>
					{activeUsers?.find((user) => user.sub === person.sub)
						? "Online"
						: "Offline"}
				</Status>
			</Box>
			<RightContainer>
				<Search />
				<MoreVert />
			</RightContainer>
		</Header>
	);
};

export default ChatHeader;

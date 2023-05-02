import { useContext } from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";

//components
import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)`
	height: 100vh;
	background-color: #f0f2f5;
`;

const Header = styled(AppBar)`
	height: 125px;
	background-color: #59a983;
	box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
	height: 222px;
	background-color: #5aaa84;
	box-shadow: none;
`;

const Messenger = () => {
	const { account } = useContext(AccountContext);
	return (
		<Component>
			{account ? (
				<>
					<Header>
						<Toolbar></Toolbar>
					</Header>
					<ChatDialog />
				</>
			) : (
				<>
					<LoginHeader>
						<Toolbar></Toolbar>
					</LoginHeader>
					<LoginDialog />
				</>
			)}
		</Component>
	);
};

export default Messenger;

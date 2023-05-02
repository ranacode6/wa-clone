import { useEffect, useState } from "react";
import { useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, styled, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
	height: 81vh;
	overflow: overlay;
`;

const StyledDivider = styled(Divider)`
	margin: 0 0 0 70px;
	opacity: 0.6;
`;

const Conversations = ({ text }) => {
	const [users, setUsers] = useState([]);
	const { account, socket, setActiveUsers } = useContext(AccountContext);

	useEffect(() => {
		const fetchData = async () => {
			let response = await getUsers();
			const filteredData = response.filter((user) =>
				user.name.toLowerCase().includes(text.toLowerCase())
			);
			setUsers(filteredData);
		};
		fetchData();
	}, [text]);

	useEffect(() => {
		socket.current.emit("addUsers", account);
		socket.current.on("getUsers", (users) => {
			setActiveUsers(users);
		});
	}, [account, setActiveUsers, socket]);

	return (
		<Component>
			{users.map(
				(user, index) =>
					user.sub !== account.sub && (
						<Box key={index}>
							<Conversation user={user} />
							<StyledDivider />
						</Box>
					)
			)}
		</Component>
	);
};

export default Conversations;

import { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import { Groups, DonutLarge, Chat } from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
	height: 44px;
	background: #f0f2f5;
	padding: 8px 16px;
	display: flex;
	align-items: center;
`;

const Wrapper = styled(Box)`
	margin-left: auto;
	& > * {
		margin: 2px;
		padding: 8px;
		color: #54656f;
	}
`;

const Image = styled(`img`)({
	width: 40,
	height: 40,
	borderRadius: "50%",
});
const Header = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const { account } = useContext(AccountContext);

	const toggleDrawer = () => {
		setOpenDrawer(true);
	};
	return (
		<>
			<Component>
				<Image
					src={account.picture}
					alt="dp"
					onClick={() => toggleDrawer()}
				/>
				<Wrapper>
					<Groups />
					<DonutLarge />
					<Chat />
					<HeaderMenu setOpenDrawer={setOpenDrawer} />
				</Wrapper>
			</Component>
			<InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
		</>
	);
};

export default Header;

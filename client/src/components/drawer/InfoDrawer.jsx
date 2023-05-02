import { Box, Drawer, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

// Components
import Profile from "./Profile";

const drawerStyle = {
	left: 20,
	top: 20,
	height: "95%",
	width: "30%",
	boxShadow: "none",
};

const Header = styled(Box)`
	background: #428169;
	height: 108px;
	color: #ffffff;
	display: flex;
	& > svg,
	& > p {
		margin-top: auto;
		padding: 15px;
		font-weight: 500;
	}
`;

const Text = styled(Typography)`
	font-size: 19px;
`;

const Component = styled(Box)`
	background-color: #f0f2f5;
	height: 85%;
`;
const InfoDrawer = ({ open, setOpen }) => {
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Drawer
			open={open}
			onClose={handleClose}
			PaperProps={{ sx: drawerStyle }}
			style={{ zIndex: 1500 }}
		>
			<Header>
				<ArrowBack onClick={() => setOpen(false)} />
				<Text>Profile</Text>
			</Header>
			<Component>
				<Profile />
			</Component>
		</Drawer>
	);
};

export default InfoDrawer;

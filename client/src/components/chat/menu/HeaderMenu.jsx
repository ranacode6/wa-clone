import { useState } from "react";

import { Menu, MenuItem, styled } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const HeaderMenu = ({ setOpenDrawer }) => {
	const [open, setOpen] = useState(false);

	const handleClick = (e) => {
		setOpen(e.currentTarget);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const MenuOption = styled(MenuItem)`
		font-size: 16px;
		color: #54656f;
		padding: 15px 60px 5px 24px;
	`;
	return (
		<>
			<MoreVert onClick={handleClick} />
			<Menu
				id="basic-menu"
				anchorEl={open}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuOption
					onClick={() => {
						handleClose();
						setOpenDrawer(true);
					}}
				>
					Profile
				</MenuOption>
			</Menu>
		</>
	);
};

export default HeaderMenu;

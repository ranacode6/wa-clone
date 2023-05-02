import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
	display: flex;
	justify-content: center;
`;

const Image = styled(`img`)({
	width: 200,
	height: 200,
	borderRadius: "50%",
	padding: "25px 0",
});

const BoxWrapper = styled(Box)`
	background: #ffffff;
	padding: 12px 30px 2px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	& :first-of-type {
		font-size: 14px;
		color: #478577;
		font-weight: 300;
	}
	& :last-child {
		margin: 14px 0;
		font-size: 16px;
	}
`;

const DescriptionContainer = styled(Box)`
	padding: 15px 20px 28px 30px;
	& > p {
		font-size: 14px;
		color: #667781;
	}
`;

const Profile = () => {
	const { account } = useContext(AccountContext);
	return (
		<>
			<ImageContainer>
				<Image src={account.picture} alt="dp" />
			</ImageContainer>
			<BoxWrapper>
				<Typography>Your name</Typography>
				<Typography>{account.name}</Typography>
			</BoxWrapper>
			<DescriptionContainer>
				<Typography>
					This is not your username or pin. This name will be visible
					to your WhatsApp contacts.
				</Typography>
			</DescriptionContainer>
			<BoxWrapper>
				<Typography>About</Typography>
				<Typography>Can't talk, WhatsApp only</Typography>
			</BoxWrapper>
		</>
	);
};

export default Profile;

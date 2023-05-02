import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const dialogStyle = {
	height: "96%",
	marginTop: "18%",
	width: "60%",
	maxWidth: "100%",
	maxHeight: "100%",
	boxShadow: "none",
	overflow: "hidden",
};

const Component = styled(Box)`
	display: flex;
`;

const Container = styled(Box)`
	padding: 64px 0 64px 64px;
`;

const QRCode = styled(`img`)({
	height: 300,
	width: 300,
	margin: `50px 0 0 50px`,
});

const Title = styled(Typography)`
	font-size: 28px;
	color: #41525d;
	font-family: inherit;
	font-weight: 400;
	margin-bottom: 25px;
`;

const StyledList = styled(List)`
	& > li {
		margin-top: 15px;
		padding: 0;
		font-size: 18px;
		line-height: 28px;
		color: #3b4a54;
	}
`;
const LoginDialog = () => {
	const { setAccount } = useContext(AccountContext);
	const onLoginSuccess = async (res) => {
		const decoded = jwt_decode(res.credential);
		setAccount(decoded);
		await addUser(decoded);
	};

	const onLoginError = (res) => {
		console.log("Login Failed", res);
	};
	return (
		<Dialog
			open={true}
			PaperProps={{ sx: dialogStyle }}
			hideBackdrop={true}
		>
			<Component>
				<Container>
					<Title>Use WhatsApp on your computer</Title>
					<StyledList>
						<ListItem>1. Open WhatsApp on your computer</ListItem>
						<ListItem>
							2. Tap Menu or Settings and Select Linked Devices
						</ListItem>
						<ListItem>3. Tap on Link a Device</ListItem>
						<ListItem>
							4. Point your phone to this screen to capture the QR
							code
						</ListItem>
					</StyledList>
				</Container>
				<Box style={{ position: "relative" }}>
					<QRCode
						src="https://www.techopedia.com/wp-content/uploads/2023/03/aee977ce-f946-4451-8b9e-bba278ba5f13.png"
						alt="qr code"
					/>
					<Box
						style={{
							position: "absolute",
							top: "50%",
							transform: "translateX(50%)",
						}}
					>
						<GoogleLogin
							onSuccess={onLoginSuccess}
							onError={onLoginError}
						/>
					</Box>
				</Box>
			</Component>
		</Dialog>
	);
};

export default LoginDialog;

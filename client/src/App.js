// components
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

function App() {
	const clientId =
		"282167392115-nkcqg09lfhlmn88sggq3ud3ruojvpie7.apps.googleusercontent.com";
	return (
		<GoogleOAuthProvider clientId={clientId}>
			<AccountProvider>
				<Messenger />
			</AccountProvider>
		</GoogleOAuthProvider>
	);
}

export default App;

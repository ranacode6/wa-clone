import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
	const [account, setAccount] = useState();
	const [person, setPerson] = useState({});
	const socket = useRef();
	const [activeUsers, setActiveUsers] = useState([]);
	const [newMessageFlag, setNewMessageFlag] = useState(false);

	useEffect(() => {
		socket.current = io("https://whatsapp-clone-mern.onrender.com");
	}, []);

	return (
		<AccountContext.Provider
			value={{
				account,
				setAccount,
				person,
				setPerson,
				socket,
				activeUsers,
				setActiveUsers,
				newMessageFlag,
				setNewMessageFlag,
			}}
		>
			{children}
		</AccountContext.Provider>
	);
};

export default AccountProvider;

import { createContext, useState } from "react";

export const userContext = createContext<null | any>(null);

export const UserProvider: React.FC<{ children: any }> = ({ children }) => {
	const [active, setactive] = useState(false);

	return <userContext.Provider value={{ active }}></userContext.Provider>;
};

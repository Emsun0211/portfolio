import React, { Children, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />

			{children}

			<Footer />
		</>
	);
};

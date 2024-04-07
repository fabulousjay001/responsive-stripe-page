/** @format */

import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: '', links: [] });
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setLocation(coordinates);
		setIsSubMenuOpen(true);
		setPage(page);
	};
	const closeSubmenu = () => {
		setIsSubMenuOpen(false);
	};
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubMenuOpen,
				location,
				page,
				openSidebar,
				closeSidebar,
				openSubmenu,
				closeSubmenu,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

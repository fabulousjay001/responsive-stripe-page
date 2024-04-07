/** @format */

import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
	const displaySubmenu = (e) => {
		const btn = e.target.textContent; //get navbtn text content of the button that triggered the hover event.
		const tempBtn = e.target.getBoundingClientRect(); // To get position and size of the button that triggered the hover event relative to the viewport.
		const btnCenter = (tempBtn.left + tempBtn.right) / 2; // Horizontal center of the button by averaging its left and right coordinates. This value is used to position the submenu horizontally relative to the button.
		const bottom = tempBtn.bottom - 3; //This calculates the vertical position of the submenu. It subtracts 3 pixels from the bottom coordinate of the button, likely to position the submenu slightly above the button to create a visual offset.

		openSubmenu(btn, { btnCenter, bottom }); //This line calls the openSubmenu function with the button text (btn) and an object containing the calculated btnCenter and bottom values. This function likely positions and displays the submenu based on these values.
	};

	const handleSubmenu = (e) => {
		if (!e.target.classList.contains('link-btn')) {
			closeSubmenu();
		}
	}; //this way, it only displays the submenu if the mouse is on it

	return (
		<nav
			className="nav"
			onMouseOver={handleSubmenu}>
			<div className="nav-center">
				<div className="nav-header">
					<img
						src={logo}
						alt="stripe"
						className="nav-logo"
					/>
					<button
						className="btn toggle-btn"
						onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}>
							products
						</button>
					</li>{' '}
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>{' '}
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}>
							company
						</button>
					</li>{' '}
				</ul>
				<button className="btn signin-btn">Sign In</button>
			</div>
		</nav>
	);
};

export default Navbar;

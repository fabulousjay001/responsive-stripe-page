/** @format */

import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
	const {
		isSubMenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext(); //grab page location and issubmenuopen from context file. Page is an object btw
	const container = useRef(null);
	const [columns, setColumns] = useState('col-2');

	useEffect(() => {
		setColumns('col-2');
		const submenu = container.current;
		const { btnCenter, bottom } = location;
		submenu.style.left = `${btnCenter}px`;
		submenu.style.top = `${bottom}px`;

		if (links.length === 3) {
			setColumns('col-3'); //width should change dynamically if links from data.js is equal to 3
		}
		if (links.length > 3) {
			//width should change dynamically if links from data.js is greater than 3
			setColumns('col-4');
		}
	}, [location, links]);

	return (
		<aside
			className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`}
			ref={container}>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					const { label, icon, url } = link;

					return (
						<a
							key={index}
							href={url}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;

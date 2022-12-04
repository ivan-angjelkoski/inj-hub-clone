import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from '../../context/AppContextWrapper';
import { LinkType } from '../Navbar';

type Props = {
	link: LinkType;
};

const Link = ({ link }: Props) => {
	const { closeMenu } = useStore();
	return (
		<NavLink
			onClick={closeMenu}
			to={link.href}
			className={({ isActive }) =>
				`px-8 py-4 uppercase text-xs text-gray-400 hover:text-white tracking-widest hover:bg-gray-900 ${
					isActive && 'text-primary-500'
				}`
			}
		>
			<span className="block">{link.label}</span>
		</NavLink>
	);
};

export default Link;

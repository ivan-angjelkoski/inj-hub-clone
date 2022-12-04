import React from 'react';
import { useStore } from '../context/AppContextWrapper';
import DarkModeSwich from './DarkModeSwich';
import InjectiveLogo from './navbar/InjectiveLogo';
import Link from './navbar/Link';

type Props = {};
export type LinkType = {
	href: string;
	label: string;
};

const LINKS: LinkType[] = [
	{ href: '/', label: 'Dashboard' },
	{ href: '/trade', label: 'Featured DAPPS' },
	{ href: '/bridge', label: 'Bridge' },
	{ href: '/staking', label: 'Staking' },
	{ href: '/governance', label: 'Governance' },
	{ href: '/insurance-funds', label: 'Insurance Funds' },
	{ href: '/auction', label: 'Auction' },
	{ href: '/faq', label: 'FAQ' },
];

const Navbar = (props: Props) => {
	const { isDark, closeMenu, isMenuOpen } = useStore();
	return (
		<>
			<div
				className={`max-w-[256px] w-full md:w-64 md:max-w-none bg-black h-screen overflow-hidden flex flex-col text-white z-30 fixed left-0 top-0 bottom-0 md:relative ${
					isMenuOpen ? 'translate-x-0' : '-translate-x-full'
				} md:translate-x-0 transition-transform duration-500 md:transition-none`}
			>
				<div className="absolute top-4 right-4 text-4xl block md:hidden">
					<button onClick={closeMenu}>&times;</button>
				</div>
				<div className="items-center p-6 hidden md:flex">
					<InjectiveLogo className="w-8 h-8 mr-4" />
					<div className="text-center">
						<h2 className="font-sans text-lg leading-none tracking-wider">
							INJECTIVE
						</h2>
						<h2 className="tracking-widest text-sm ">HUB</h2>
					</div>
				</div>
				<nav className="flex flex-1 flex-col overflow-y-scroll mt-10 md:mt-0">
					{LINKS.map((link) => (
						<Link
							link={link}
							key={link.href}
						/>
					))}
					<div className="p-8">
						<div className=" bg-gradient-to-t from-blue-800 to-blue-900 rounded-lg p-3">
							<h2>Onboard onto Injective instantly with fiat</h2>
							<a
								href="#"
								className="text-primary-500 flex items-center"
							>
								<span>Get Started</span>
								<span className="inline-block -rotate-[135deg] text-2xl ">
									&darr;
								</span>
							</a>
						</div>
					</div>
				</nav>
				<div
					className="p-8"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="flex items-center select-none">
						<DarkModeSwich />
						<h2 className="ml-4 uppercase text-xs">
							{isDark ? 'Dark' : 'Light'}
						</h2>
					</div>
					<div className="text-right">
						<a
							target={'_blank'}
							referrerPolicy={'no-referrer'}
							className="text-primary-500 font-mono text-sm"
							href="https://explorer.injective.network/block/20765474"
						>
							<span>&#35;20,765,474</span>
							<span className="inline-block -rotate-[135deg] text-lg ml-2 mt-2">
								&darr;
							</span>
						</a>
					</div>
				</div>
				<div className="py-10 md:py-0"></div>
			</div>
			{isMenuOpen && (
				<div
					onClick={closeMenu}
					className="fixed inset-0 bg-black/70 md:hidden z-20 "
				></div>
			)}
		</>
	);
};

export default Navbar;

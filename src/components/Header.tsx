import React from 'react';
import Button from './Button';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { useStore } from '../context/AppContextWrapper';
import InjectiveLogo from './navbar/InjectiveLogo';

type Props = {};

const Header = (props: Props) => {
	const { openMenu } = useStore();
	return (
		<div className="sticky top-0 px-8 py-4 flex justify-between items-center border-b border-primary-500/30">
			<div>
				<div className="flex md:hidden items-center ">
					<img
						src="/injective_logo.svg"
						alt="injective"
						className="mr-4"
					/>
					<button onClick={openMenu}>
						<HiBars3BottomLeft className="w-7 h-7" />
					</button>
				</div>
			</div>
			<Button>Connect</Button>
		</div>
	);
};

export default Header;

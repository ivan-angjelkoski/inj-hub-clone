import React from 'react';

type Props = {
	children: React.ReactNode;
};

const ButtonGhost = (
	props: React.ButtonHTMLAttributes<HTMLButtonElement> & Props
) => {
	return (
		<button
			className={`text-center rounded-3xl px-4 py-2 text-sm text-primary-800  font-semibold  dark:text-primary-500  ${props.className}`}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default ButtonGhost;

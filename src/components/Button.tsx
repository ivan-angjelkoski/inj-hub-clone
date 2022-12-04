import React from 'react';

type Props = {
	children: React.ReactNode;
};

const Button = (
	props: React.ButtonHTMLAttributes<HTMLButtonElement> & Props
) => {
	return (
		<button
			className={`text-center rounded-3xl px-4 py-2 text-sm text-gray-200 shadow font-semibold bg-primary-800 hover:bg-primary-800 dark:bg-primary-500 dark:hover:bg-primary-400 dark:text-gray-900 dark:shadow-none ${props.className}`}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;

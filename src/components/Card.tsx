import React from 'react';

type Props = {};

const Card = (props: Props & React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={`dark:bg-gray-950 xs:p-6 shadow-[0_0_20px] shadow-black/20 md:p-8  rounded-xl bg-gray-100 p-4 overflow-hidden ${props.className}`}
		>
			{props.children}
		</div>
	);
};

export default Card;

import React from 'react';

type Props = {
	children: React.ReactNode;
};

const Title = ({ children }: Props) => {
	return <h2 className="my-4 text-xl font-bold">{children}</h2>;
};

export default Title;

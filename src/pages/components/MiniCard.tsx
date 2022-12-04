import React from 'react';

export type MarketDataType = {
	label: string;
	value: string;
	percentage?: number;
};
type Props = { data: MarketDataType };

const MiniCard = ({ data }: Props) => {
	return (
		<div className="flex flex-col min-h-32 p-3 bg-gray-200 dark:bg-gray-900 rounded-2xl text-center">
			<div className="flex-1">
				<h3 className="text-lg">${data.value}M</h3>
				{data.percentage && (
					<h4
						className={`${
							data.percentage > 0 ? 'text-red-500' : 'text-primary-500'
						} text-xs`}
					>
						{data.percentage}%
					</h4>
				)}
			</div>
			<h2 className="uppercase text-gray-500 text-sm">{data.label}</h2>
		</div>
	);
};

export default MiniCard;

import React, { useState } from 'react';
import Card from '../../components/Card';
import Title from '../../components/Title';
import Chart from './Chart';
import MiniCard, { MarketDataType } from './MiniCard';
import TimeSelector from './TimeSelector';

type Props = {};
export type PriceDateType = {
	id: number;
	label: string;
};
const DATES: PriceDateType[] = [
	{ id: 1, label: 'Day' },
	{ id: 2, label: 'Week' },
	{ id: 3, label: '1 Month' },
	{ id: 4, label: '3 Month' },
];

export type ChartObjectType = {
	value: number;
	date: string;
};

const DATA: ChartObjectType[] = [];
for (let i = 0; i < 130; i++) {
	DATA.push({
		value: Math.random() * 500 + 500,
		date: `Jan ${(i % 30) + 1}`,
	});
}

const MARKET_DATA: MarketDataType[] = [
	{ label: 'Price', value: '1.65', percentage: -0.34 },
	{ label: 'Market Cap', value: '1.65', percentage: 0.34 },
	{ label: 'Volume', value: '1.65' },
	{ label: 'Staking', value: '1.65' },
];

const Overview = (props: Props) => {
	const [date, setDate] = useState<PriceDateType>(DATES[0]);
	const setCurrentDate = (date: PriceDateType) => {
		setDate(date);
	};
	const filteredData = DATA.slice((date.id - 1) * 30, 30 * date.id);
	return (
		<div className="">
			<Title>Overview</Title>
			<Card className="">
				<TimeSelector
					dates={DATES}
					currentDate={date.id}
					setDate={setCurrentDate}
				/>
				<Chart data={filteredData} />
				<div className="grid gap-8 grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 my-4">
					{MARKET_DATA.map((data) => (
						<MiniCard
							key={data.label}
							data={data}
						/>
					))}
				</div>
			</Card>
		</div>
	);
};

export default Overview;

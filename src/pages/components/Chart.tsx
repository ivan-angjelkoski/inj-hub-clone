import React from 'react';
import {
	ResponsiveContainer,
	AreaChart,
	XAxis,
	YAxis,
	Area,
	Tooltip,
	CartesianGrid,
} from 'recharts';
import {
	NameType,
	ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { ContentType, TooltipProps } from 'recharts/types/component/Tooltip';
import { ChartObjectType } from './Overview';

type Props = {
	data: ChartObjectType[];
};

const Chart = ({ data }: Props) => {
	return (
		<div className="bg-gray-200 dark:bg-gray-900 p-5 rounded-2xl">
			<ResponsiveContainer
				width={'100%'}
				height={250}
			>
				<AreaChart data={data}>
					<defs>
						<linearGradient
							id="color"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="0%"
								stopColor="#00b1b4"
								stopOpacity={0.8}
							></stop>
							<stop
								offset="75%"
								stopColor="rgb(0,246,252)"
								stopOpacity={0.3}
							></stop>
						</linearGradient>
					</defs>
					<Area
						type={'monotone'}
						dataKey={'value'}
						stroke="rgba(0,246,252,0.5)"
						fill="url(#color)"
					/>
					<XAxis dataKey={'date'} />
					<YAxis dataKey={'value'} />
					<Tooltip
						content={(props) => <CustomTooltip tooltip={props} />}
						// cursor={false}
						// contentStyle={{ boxShadow: 'none', outline: 'none' }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

const CustomTooltip = ({ tooltip }: { tooltip: any }) => {
	if (tooltip.payload?.length == 0) {
		return <div tabIndex={-1}></div>;
	} else {
		return (
			<div
				className="bg-gray-500/10 rounded-2xl p-2"
				tabIndex={-1}
			>
				<h1>$ {tooltip.payload[0].value.toFixed(2)}</h1>
			</div>
		);
	}
};

export default Chart;

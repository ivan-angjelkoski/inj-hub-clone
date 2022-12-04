import React from 'react';
import { PriceDateType } from './Overview';
import { motion } from 'framer-motion';

type Props = {
	dates: PriceDateType[];
	currentDate: number;
	setDate: (date: PriceDateType) => void;
};

const TimeSelector = ({ dates, currentDate, setDate }: Props) => {
	return (
		<div className="flex justify-center mb-4">
			<div className="flex bg-gray-200 dark:bg-gray-900 py-2 rounded-full px-4">
				{dates.map((date) => (
					<button
						key={date.id}
						className="p-1 text-sm px-4 relative"
						onClick={() => {
							setDate(date);
						}}
					>
						{currentDate == date.id && (
							<motion.div
								layoutId="backdrop"
								className="absolute inset-0 bg-gray-900 dark:bg-gray-700 rounded-full"
							></motion.div>
						)}
						<span
							className={`relative ${
								currentDate == date.id ? 'text-white' : 'text-black'
							} dark:text-white`}
						>
							{date.label}
						</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default TimeSelector;

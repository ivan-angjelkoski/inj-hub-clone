import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export type BlockType = {
	id: number;
	label: string;
	date?: number;
};

type Props = {
	block: BlockType;
};

const Block = ({ block }: Props) => {
	const [seconds, setSeconds] = useState<number>(1);
	useEffect(() => {
		const timer = setInterval(() => {
			const difference = parseInt(
				((Date.now() - block.date!) / 1000).toFixed(0)
			);
			setSeconds(difference);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<motion.div
			layout
			className=" bg-gray-100 dark:bg-gray-900 rounded-2xl p-5"
		>
			<div>
				<h3 className="tracking-wider">#{block?.label ?? '334455'}</h3>
				<p className="text-xs text-gray-400">{seconds} seconds ago</p>
			</div>
			<div className="flex mt-3">
				<img
					src="./injective_logo.svg"
					alt="injective"
					className="w-5"
				/>
				<h3 className="ml-4">Injective</h3>
			</div>
		</motion.div>
	);
};

export default Block;

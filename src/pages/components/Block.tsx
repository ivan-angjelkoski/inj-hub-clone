import React from 'react';
import { motion } from 'framer-motion';

export type BlockType = {
	id: number;
	label: string;
	date?: string;
};

type Props = {
	block: BlockType;
};

const Block = ({ block }: Props) => {
	return (
		<motion.div
			layout
			className=" bg-gray-100 dark:bg-gray-900 rounded-2xl p-5"
		>
			<div>
				<h3 className="tracking-wider">#{block?.label ?? '334455'}</h3>
				<p className="text-xs text-gray-400">1 seconds ago</p>
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

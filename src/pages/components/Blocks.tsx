import { AnimatePresence, MotionConfig } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Title from '../../components/Title';
import Block, { BlockType } from './Block';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

type Props = {};

const Blocks = (props: Props) => {
	const [blocks, setBlocks] = useState<BlockType[]>([
		{ id: 1, label: '332222' },
	]);
	const addBlock = () => {
		const newBlock = {
			id: Math.random(),
			label: (Math.random() * 100000).toFixed(0).toString(),
		};

		setBlocks((prev) => [newBlock, ...prev].slice(0, 5));
	};
	useEffect(() => {
		const timer = setInterval(addBlock, 2000);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<div>
			<Title>Blocks</Title>

			<Card>
				{/* <Button onClick={addBlock}>Add Block</Button> */}
				<AnimatePresence mode="sync">
					<motion.div
						layout
						className="space-y-4"
					>
						{blocks.map((block) => (
							<Block
								key={block.id}
								block={block}
							/>
						))}
					</motion.div>
				</AnimatePresence>
			</Card>
		</div>
	);
};

export default Blocks;

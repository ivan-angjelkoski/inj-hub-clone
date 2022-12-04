import React from 'react';
import { motion } from 'framer-motion';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useStore } from '../context/AppContextWrapper';

type Props = {};

const DarkModeSwich = (props: Props) => {
	const { isDark, toggleDark } = useStore();
	return (
		<motion.div
			onClick={toggleDark}
			className={`bg-gray-900 rounded-full p-1 flex w-16 cursor-pointer select-none relative `}
		>
			<motion.div className=" w-5 h-5 ">
				<motion.div
					className="absolute"
					animate={{
						rotate: !isDark ? '-180deg' : '0deg',
						x: isDark ? '-100%' : '0%',
						left: !isDark ? '5%' : '95%',
					}}
					transition={{ duration: 0.5 }}
				>
					{isDark ? (
						<BsFillMoonFill className="p-1 w-5 h-5 bg-gray-500 rounded-full" />
					) : (
						<BsFillSunFill className="p-1 w-5 h-5 bg-gray-500 rounded-full" />
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default DarkModeSwich;

import React from 'react';
import Button from '../components/Button';
import ButtonGhost from '../components/ButtonGhost';
import Card from '../components/Card';
import InjectiveLogo from '../components/navbar/InjectiveLogo';
import Blocks from './components/Blocks';
import Overview from './components/Overview';

type Props = {};

const Dashboard = (props: Props) => {
	return (
		<div className=" py-8 ">
			<div className="px-4 sm:px-6 md:px-8 space-y-2">
				<div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
					<Card>
						<div className="flex mb-4">
							<div className="flex-1 pr-4">
								<h3 className="mb-2 text-md font-bold">Staking Rewards</h3>
								<p className="text-gray-400 text-sm">
									By staking your INJ, you earn rewards and help keep the
									Injective network secure.
								</p>
							</div>
							<div>
								<div className="rounded-[50%] w-24 h-24 border border-primary-500 shadow-[inset_0_0_5px] shadow-primary-500 flex flex-col text-center items-center justify-center">
									<h4 className="text-gray-500 font-bold">APR</h4>
									<h3>15,74&#37;</h3>
								</div>
							</div>
						</div>
						<div className="grid gap-2 sm:grid-cols-2">
							<Button>Delegate Now</Button>
							<ButtonGhost>
								Calculate Rewards <span className="font-sans">&rarr;</span>
							</ButtonGhost>
						</div>
					</Card>
					<Card className="relative">
						<img
							src="/illustration-new.svg"
							alt="illustration"
							className="absolute right-0 top-0 bottom-0 z-0 rotate-180 translate-x-[50%]"
						/>
						<div className="mb-4 w-[60%] z-10">
							<h3 className="mb-2 text-md font-bold flex items-center">
								<div className="w-4 h-4 mr-2 animate-pulse bg-primary-800/40 rounded-full grid place-items-center">
									<div className="w-2 h-2 bg-primary-500 rounded-full"></div>
								</div>
								Burn Auction : Round #74
							</h3>
							<p className="text-gray-400 text-sm">
								By Burn Auction : Round #74 INJ, you earn rewards and help keep
								the Injective network secure.
							</p>
						</div>
						<div>
							<Button>Burn Auction</Button>
						</div>
					</Card>
				</div>
				<div className="grid gap-8 grid-cols-1 lg:grid-cols-3 ">
					<div className="lg:col-span-2">
						<Overview />
					</div>
					<Blocks />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

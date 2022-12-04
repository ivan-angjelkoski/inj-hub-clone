import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

type Props = {};

const App = (props: Props) => {
	return (
		<div className="flex font-montserrat h-screen ">
			<Navbar />
			<div className="flex-1 flex flex-col overflow-hidden">
				<Header />
				<div className="overflow-y-scroll">
					<Routes>
						<Route
							path="/"
							element={<Dashboard />}
						/>
						<Route
							path="/trade"
							element={<h1>Featured Dapps</h1>}
						/>
						<Route
							path="/bridge"
							element={<h1>Bridge</h1>}
						/>
						<Route
							path="/staking"
							element={<h1>staking</h1>}
						/>
						<Route
							path="/governance"
							element={<h1>Governance</h1>}
						/>
						<Route
							path="/insurance-funds"
							element={<h1>insurance</h1>}
						/>
						<Route
							path="/auction"
							element={<h1>auction</h1>}
						/>
						<Route
							path="/faq"
							element={<h1>faq</h1>}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;

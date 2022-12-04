import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppContextWrapper from './context/AppContextWrapper';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppContextWrapper>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppContextWrapper>
	</React.StrictMode>
);

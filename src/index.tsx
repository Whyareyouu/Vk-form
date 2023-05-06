import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormProvider from './ui/context/context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<FormProvider>
			<App />
		</FormProvider>
	</React.StrictMode>
);

reportWebVitals();

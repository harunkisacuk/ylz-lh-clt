import React from 'react';

const ReceiptReportsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/manager/receiptreports',
			component: React.lazy(() => import('./ReceiptReportsApp'))
		}
	]
};

export default ReceiptReportsAppConfig;

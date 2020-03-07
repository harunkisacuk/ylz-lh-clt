import React from 'react';

const ReceiptAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/manager/receipts',
			//component: React.lazy(() => import('./ReceiptApp'))
			component: () => import('./ReceiptApp')
		}
	]
};

export default ReceiptAppConfig;

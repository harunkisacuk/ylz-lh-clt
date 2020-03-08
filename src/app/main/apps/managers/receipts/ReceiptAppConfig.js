import React from 'react';
import { SecureRoute } from '@okta/okta-react';
import ReceiptApp from './ReceiptApp';

const ReceiptAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/manager/receipts',
			// component: () => <SecureRoute component={Example} />
			// component: React.lazy(() => import('./ReceiptApp'))
			component: () => <SecureRoute component={ReceiptApp} />
		}
	]
};

export default ReceiptAppConfig;

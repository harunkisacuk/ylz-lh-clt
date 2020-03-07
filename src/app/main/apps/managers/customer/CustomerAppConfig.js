import React from 'react';
import { SecureRoute } from '@okta/okta-react';
import CustomerApp from './CustomerApp';

const CustomerAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/manager/customers',
			// component: () => <SecureRoute component={Example} />
			// component: React.lazy(() => import('./CustomerApp'))
			component: () => <SecureRoute component={CustomerApp} />
		}
	]
};

export default CustomerAppConfig;

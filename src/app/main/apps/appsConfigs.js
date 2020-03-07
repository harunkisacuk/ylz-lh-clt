import { ImplicitCallback } from '@okta/okta-react';
import CustomerAppConfig from './managers/customer/CustomerAppConfig';
import ReceiptAppConfig from './managers/receipts/ReceiptAppConfig';
import ReceiptReportsAppConfig from './managers/receipt-reports/ReceiptReportsAppConfig';


const appsConfigs = [
	CustomerAppConfig,
	ReceiptAppConfig,
	ReceiptReportsAppConfig,
	{
		routes: [
			{
				path: '/implicit/callback',
				//component: React.lazy(() => import('./ReceiptApp'))
				component: ImplicitCallback
			}
		]
	}
	// <Route path='/implicit/callback' component={ImplicitCallback} />
];

export default appsConfigs;

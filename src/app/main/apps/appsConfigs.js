import { ImplicitCallback } from '@okta/okta-react';
import CustomerAppConfig from './managers/customer/CustomerAppConfig';
import ReceiptAppConfig from './managers/receipts/ReceiptAppConfig';
import ReceiptReportsAppConfig from './managers/receipt-reports/ReceiptReportsAppConfig';
import AuditsPagesAppConfig from './admins/audits-pages/AuditsPagesAppConfig';

const appsConfigs = [
	CustomerAppConfig,
	ReceiptAppConfig,
	ReceiptReportsAppConfig,
	AuditsPagesAppConfig,
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

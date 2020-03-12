import { ImplicitCallback } from '@okta/okta-react';
import CustomerAppConfig from './managers/customer/CustomerAppConfig';
import ReceiptAppConfig from './managers/receipts/ReceiptAppConfig';
import ReceiptReportsAppConfig from './managers/receipt-reports/ReceiptReportsAppConfig';
import AuditsPagesAppConfig from './admins/audits-pages/AuditsPagesAppConfig';
import LogsPagesAppConfig from './admins/logs-pages/LogsPagesAppConfig';
import ReferenceDataPagesAppConfig from './admins/reference-data-pages/ReferenceDataPagesAppConfig';
import UsersPagesAppConfig from './admins/users-pages/UsersPagesAppConfig';


const appsConfigs = [
	CustomerAppConfig,
	ReceiptAppConfig,
	ReceiptReportsAppConfig,
	AuditsPagesAppConfig,
	LogsPagesAppConfig,
	ReferenceDataPagesAppConfig,
	UsersPagesAppConfig,
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

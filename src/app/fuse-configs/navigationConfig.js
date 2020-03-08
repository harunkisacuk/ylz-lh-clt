import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'managers',
				title: 'Managers',
				translate: 'MANAGERS',
				type: 'collapse',
				icon: 'dashboard',
				children: [
					{
						id: 'manager-customer',
						title: 'Customer',
						type: 'item',
						url: '/manager/customers'
					},
					{
						id: 'manager-receipts',
						title: 'Receipts',
						type: 'item',
						url: '/manager/receipts'
					},
					{
						id: 'manager-receipt-reports',
						title: 'Receipt Reports',
						type: 'item',
						url: '/manager/receiptreports'
					}

				]
			},
			{
				id: 'admins',
				title: 'Admins',
				translate: 'ADMINS',
				type: 'collapse',
				icon: 'school',
				children: [
					{
						id: 'admin-reference-data-pages',
						title: 'Reference Data Pages',
						type: 'item',
						url: '/apps/manager/referencedatapages'
					},
					{
						id: 'admin-users-pages',
						title: 'Users Pages',
						type: 'item',
						url: '/apps/manager/userspages'
					},
					{
						id: 'admin-logs-pages',
						title: 'Logs Pages',
						type: 'item',
						url: '/apps/manager/logspages'
					},
					{
						id: 'admin-audits-pages',
						title: 'Audits Pages',
						type: 'item',
						url: '/admin/auditspages'
					}

				]
			},
		]
	}
];

export default navigationConfig;

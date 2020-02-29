import React from 'react'
import i18next from 'i18next';
import Example from './Example';
import Example2 from './Example2';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import { SecureRoute } from '@okta/okta-react'

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const ExampleConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/example',
			component: () => < SecureRoute component={Example} />
		},
		{
			path: '/example2',
			component: Example2
		}
	]
};

export default ExampleConfig;
// 
/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/

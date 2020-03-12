import React from 'react';
import { SecureRoute } from '@okta/okta-react';
import LogsPagesApp from './LogsPagesApp';

const LogsPagesAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/admin/logspages',
            component: () => <SecureRoute component={LogsPagesApp} />
        }
    ]
};

export default LogsPagesAppConfig;
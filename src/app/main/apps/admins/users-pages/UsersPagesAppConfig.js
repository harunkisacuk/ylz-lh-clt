
import React from 'react';
import { SecureRoute } from '@okta/okta-react';
import UsersPagesApp from './UsersPagesApp';

const UsersPagesAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/admin/userspages',
            component: () => <SecureRoute component={UsersPagesApp} />
        }
    ]
};

export default UsersPagesAppConfig;
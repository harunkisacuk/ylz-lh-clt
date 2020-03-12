import React from 'react';
import { SecureRoute } from '@okta/okta-react';
import ReferenceDataPagesApp from './ReferenceDataPagesApp';

const ReferenceDataPagesAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/admin/referencedatapages',
            component: () => <SecureRoute component={ReferenceDataPagesApp} />
        }
    ]
};

export default ReferenceDataPagesAppConfig;
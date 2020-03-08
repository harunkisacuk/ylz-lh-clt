import React from 'react';
import { SecureRoute } from '@okta/okta-react';
import AuditsPagesApp from './AuditsPagesApp';

const AuditsPagesAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/admin/auditspages',
            component: () => <SecureRoute component={AuditsPagesApp} />
        }
    ]
};

export default AuditsPagesAppConfig;
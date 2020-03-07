import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import appsConfigs from 'app/main/apps/appsConfigs';

import {  SecureRoute } from '@okta/okta-react';


const routeConfigs = [
	...appsConfigs,
	ExampleConfig
];

console.log('tg..routeConfigs:',routeConfigs);

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/example" /> 
	}
];

export default routes;

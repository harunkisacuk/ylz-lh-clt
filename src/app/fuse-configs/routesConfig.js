import React from 'react';
//import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import {  SecureRoute } from '@okta/okta-react';


const routeConfigs = [ExampleConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <SecureRoute to="/example" />
	}
];

export default routes;

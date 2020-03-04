import MomentUtils from '@date-io/moment';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import history from '@history';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { create } from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { Router } from 'react-router-dom';
import AppContext from './AppContext';
import { Auth } from './auth';
import routes from './fuse-configs/routesConfig';
import store from './store';
import { Security} from '@okta/okta-react';
import "../styles/security.css";

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

const config = {
	issuer: process.env.REACT_APP_OKTA_ISSUER,
	redirectUri: process.env.REACT_APP_OKTA_REDIRECT_URI,
	clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
	pkce: Boolean(process.env.REACT_APP_OKTA_PKCE)
}

console.log(config);

const App = () => {
	return (

		<AppContext.Provider
			value={{
				routes
			}}
		>
			<StylesProvider jss={jss} generateClassName={generateClassName}>
				<Provider store={store}>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<Auth>
							<Router history={history}>
								<Security  {...config} className="security">
									{/* <div style={{width:"1200px"}}> */}
										<FuseAuthorization>
											<FuseTheme>
												<FuseLayout />
											</FuseTheme>
										</FuseAuthorization>
									{/* </div> */}
								</Security>
							</Router>
						</Auth>
					</MuiPickersUtilsProvider>
				</Provider>
			</StylesProvider>
		</AppContext.Provider>
	);
};

export default App;

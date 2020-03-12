import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';


export default withAuth(class LoginLogoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
        console.log('tg..class:LoginLogoutButton-func:checkAuthentication')
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
        console.log('tg..class:LoginLogoutButton-func:checkAuthentication auth: ', authenticated)

    }

    componentDidUpdate() {
        console.log('tg..class:LoginLogoutButton-func:componentDidUpdate')
        this.checkAuthentication();
    }

    async login() {
        // Redirect to '/' after login
        this.props.auth.login('/');
    }

    async logout() {
        // Redirect to '/' after logout
        this.props.auth.logout('/');
    }

    render() {
        console.log('class:LoginLogoutButton-func:render:', this.state.authenticated)
        if (this.state.authenticated === null) return (
            <div>
                <MenuItem onClick={this.logout} role="button">
                    <ListItemIcon className="min-w-40">
                        <Icon>lock</Icon>
                    </ListItemIcon>
                    <ListItemText primary="LOGX" />
                </MenuItem>
            </div>
        );

        return this.state.authenticated ?
            <div>
                <MenuItem onClick={this.logout} role="button">
                    <ListItemIcon className="min-w-40">
                        <Icon>lock</Icon>
                    </ListItemIcon>
                    <ListItemText primary="LOGOUT" />
                </MenuItem>
            </div> :
            <div>
                <MenuItem onClick={this.login} role="button">
                    <ListItemIcon className="min-w-40">
                        <Icon>lock</Icon>
                    </ListItemIcon>
                    <ListItemText primary="LOGIN" />
                </MenuItem>
            </div>;
    }
});


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import * as authActions from 'app/auth/store/actions';
import React, { useState, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginLogoutButton from './LoginLogoutButton';

class UserMenu extends Component {
	constructor(props) {
		console.log('tg..class:UserMenu-func:constructor');
		super(props);
		//const dispatch = useDispatch();
		//const user = useSelector(({ auth }) => auth.user);
		
		
		this.state = { userMenu: null }; //tg..
		
		//const [userMenu, setUserMenu] = useState(null);

	}

	userMenuClick = event => {
//		this.setUserMenu(event.currentTarget);
		this.setState({userMenu:event.currentTarget});
	};

	userMenuClose = () => {
//		this.setUserMenu(null);
		this.setState({userMenu:null});
	};
	render() {
		return (
			<>
				<Button className="h-64" onClick={this.userMenuClick}>
					{this.props.user.data.photoURL ? (
						<Avatar className="" alt="user photo" src={this.props.user.data.photoURL} />
					) : (
							<Avatar className="">{this.props.user.data.displayName[0]}</Avatar>
						)}

					<div className="hidden md:flex flex-col mx-12 items-start">
						<Typography component="span" className="normal-case font-600 flex">
							{this.props.user.data.displayName}
						</Typography>
						<Typography className="text-11 capitalize" color="textSecondary">
							{this.props.user.role.toString()}
						</Typography>
					</div>

					<Icon className="text-16 hidden sm:flex" variant="action">
						keyboard_arrow_down
				</Icon>
				</Button>

				<Popover
                open={Boolean(this.state.userMenu)}
                anchorEl={this.state.userMenu}
                onClose={this.userMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                classes={{
                    paper: 'py-8'
                }}
            >
                {!this.props.user.role || this.props.user.role.length === 0 ? (
                    <>
					<LoginLogoutButton/>
                   
                        <MenuItem component={Link} to="/register" role="button">
                            <ListItemIcon className="min-w-40">
                                <Icon>person_add</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Register" />
                        </MenuItem>
                    </>
                ) : (
                        <>
                            <MenuItem component={Link} to="/pages/profile" onClick={this.userMenuClose} role="button">
                                <ListItemIcon className="min-w-40">
                                    <Icon>account_circle</Icon>
                                </ListItemIcon>
                                <ListItemText primary="My Profile" />
                            </MenuItem>
                            <MenuItem component={Link} to="/apps/mail" onClick={this.userMenuClose} role="button">
                                <ListItemIcon className="min-w-40">
                                    <Icon>mail</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    //tg.. dispatch(authActions.logoutUser());
                                    this.userMenuClose();
                                }}
                            >
                                <ListItemIcon className="min-w-40">
                                    <Icon>exit_to_app</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </MenuItem>
                        </>
                    )}
            </Popover>
			</>
		);
	}
}

const mapStateToProps = (state) => { 

	console.log('mapStateToProp: ',state);
	return { user: state.auth.user };
}


export default connect(mapStateToProps)(UserMenu);

     /* <MenuItem component={Link} to="/login" role="button">
                            <ListItemIcon className="min-w-40">
                                <Icon>lock</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </MenuItem> */
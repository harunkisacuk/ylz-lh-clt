import React from 'react';

export default class AuditsPages extends React.Component {
	state = { currentUserName: '', currentUserEmail: '', fatherName: '', userRoles: [], mobilePhone: '' };

	componentDidMount = () => {
		const myIdToken = JSON.parse(localStorage.getItem('okta-token-storage'));
		console.log('myIdToken:', myIdToken);
		this.setState({
			currentUserName: myIdToken.idToken.claims.name,
			currentUserEmail: myIdToken.idToken.claims.email,
			fatherName: myIdToken.idToken.claims.fatherName,
			userRoles: myIdToken.idToken.claims.userRoles,
			mobilePhone: myIdToken.idToken.claims.mobilePhone
		});
	};

	render() {
		console.log('tg..class:AuditsPages..',this.state.currentUserName)
		const { currentUserName, currentUserEmail, fatherName, userRoles, mobilePhone } = this.state;
		console.log(this.state);

		return (
			<div>
				<h3>Staff name: {currentUserName}</h3>
				<br />
				<h3>Email: {currentUserEmail}</h3>
				<br />
				<h3>Father: {fatherName}</h3>
				<br />
				<h3>mobilePhone: {mobilePhone}</h3>
				<br />
				{userRoles.map(role => {
					return (
						<div key={role}>
							<h1>group-1  : {role}</h1>
						</div>)
				})}
				<br />
			</div>
		);
	}
}

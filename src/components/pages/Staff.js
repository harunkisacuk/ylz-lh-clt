import React, { Component } from 'react';

class Staff extends Component {
    state = { currentUserName: '', currentUserEmail: '', fatherName: '', groups: [], mobilePhone: '' };

    componentDidMount = () => {
        let myIdToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        console.log('myIdToken:', myIdToken);
        this.setState({
            currentUserName: myIdToken.idToken.claims.name,
            currentUserEmail: myIdToken.idToken.claims.email,
            fatherName: myIdToken.idToken.claims.fatherName,
            groups: myIdToken.idToken.claims.userRoles,
            mobilePhone: myIdToken.idToken.claims.mobilePhone
        })
    }
    render() {
        let { currentUserName, currentUserEmail, fatherName, groups, mobilePhone } = this.state;
        console.log(this.state);

        return (
            <div>
                <h3>Staff name: {currentUserName}</h3>
                <br></br>
                <h3>Email     : {currentUserEmail}</h3>
                <br></br>
                <h3>Father     : {fatherName}</h3>
                <br></br>
                <h3>mobilePhone: {mobilePhone}</h3>
                <br></br>
                <h3>group-1     : {groups[0]}</h3>
                <br></br>
                <h3>group-2    : {groups[1]}</h3>
                <br></br>

            </div>
        );
    }
}

export default Staff;
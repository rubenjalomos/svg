import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userActions from 'auth/store/actions';
import {bindActionCreators} from 'redux';
import * as Actions from 'store/actions';
import auth0Service from 'auth0Service';


class Auth extends Component {
    /*eslint-disable-next-line no-useless-constructor*/
    constructor(props)
    {
        super(props);       
        this.auth0Check();
    }
    
    auth0Check = () => {

        auth0Service.init();

        if ( auth0Service.isAuthenticated() )
        {
            this.props.showMessage({message: 'Logging in with Auth0'});

            /**
             * Retrieve user data from Auth0
             */
            auth0Service.getUserData().then(tokenData => {

                this.props.setUserDataAuth0(tokenData);

                this.props.showMessage({message: 'Logged in with Auth0'});
            })
        }
    };
    

    render()
    {
        const {children} = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            logout             : userActions.logoutUser,           
            setUserDataAuth0   : userActions.setUserDataAuth0,            
            showMessage        : Actions.showMessage,
            hideMessage        : Actions.hideMessage
        },
        dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);

import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getProfileContainerThunkCreator} from '../../redux/main-reducer';
import { Redirect, withRouter } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 19119;
        }
        this.props.getProfileContainerThunkCreator(userId)
    }

    render() {
        console.log(this.props)
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}

export default compose(
    connect (mapStateToProps, {getProfileContainerThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
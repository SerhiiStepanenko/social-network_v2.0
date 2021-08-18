import React from "react";
import { connect } from "react-redux";
import * as axios from 'axios';
import Profile from "./Profile";
import {setUserProfile} from '../../redux/main-reducer';
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 19119;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
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
        profile: state.profilePage.profile,
    }
}


let WithRouterContainerComponents = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile}) (WithRouterContainerComponents);
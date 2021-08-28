import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {getAuthThunkCreator} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.getAuthThunkCreator()
        // authAPI.getAuth()
        //     .then(data => {
        //         let {id, login, email} = data.data;
        //         this.props.setUserAuthData(id, login, email)
        //     })
    }
    render(){
        return (
            <Header {...this.props}/>
    );
    }
    
}

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect (mapStateToProps, {getAuthThunkCreator}) (HeaderContainer);
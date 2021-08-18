import React from "react";
import { connect } from "react-redux";
import * as axios from 'axios';
import Header from "./Header";
import {setUserAuthData} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                let {id, login, email} = response.data.data;
                this.props.setUserAuthData(id, login, email)
            })
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

export default connect (mapStateToProps, {setUserAuthData}) (HeaderContainer);
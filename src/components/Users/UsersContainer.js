import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurentPage, setTotalCount, toggleIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersComponentContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onChangePages = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?count=${this.props.pageSize}&page=${pageNumber}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onChangePages={this.onChangePages}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    toggleIsFetching={this.props.toggleIsFetching} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


let UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurentPage,
        setTotalCount,
        toggleIsFetching
    })(UsersComponentContainer)
export default UsersContainer;
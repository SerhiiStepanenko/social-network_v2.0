import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {toggleIsFollowingInProgress } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {getUsersContainerThankCreator, getUsersUnfollowThankCreator, getUsersFollowThankCreator} from '../../redux/users-reducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersComponentContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersContainerThankCreator(this.props.pageSize, this.props.currentPage)
    }
    onChangePages = (pageNumber) => {
        this.props.getUsersContainerThankCreator(this.props.pageSize, pageNumber)
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
                    followingInProgress={this.props.followingInProgress}
                    getUsersUnfollowThankCreator={this.props.getUsersUnfollowThankCreator}
                    getUsersFollowThankCreator ={this.props.getUsersFollowThankCreator} />
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {toggleIsFollowingInProgress, getUsersContainerThankCreator, getUsersUnfollowThankCreator,
        getUsersFollowThankCreator}),
    withAuthRedirect
)(UsersComponentContainer)
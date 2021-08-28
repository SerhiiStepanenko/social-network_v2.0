import userPhoto from '../../assets/images/1.png'
import React from 'react';
import s from './UsersItems/Users.module.css';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api'

let Users = (props) => {

    let pagesNumber = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.activeItem} onClick={() => { props.onChangePages(p) }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id} className={s.usersItems}>
                <div className={s.leftBlock}>
                    <NavLink to={"/profile/" + u.id} >
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                    <div className={s.button}>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.getUsersUnfollowThankCreator(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.getUsersFollowThankCreator(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div className={s.rigtBlock}>
                    <div className={s.nameBlock}>
                        <div>
                            <p>{u.name}</p>
                        </div>
                        <div>
                            <p>{u.status}</p>
                        </div>
                    </div>
                    <div className={s.countryBlock}>
                        <div>
                            <p>{u.country}</p>
                        </div>
                        <div>
                            <p>{u.city}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Users;
import userPhoto from '../../assets/images/1.png'
import React from 'react';
import s from './UsersItems/Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                            ? <button onClick={() => {
                                props.toggleIsFetching(true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY": "483cd284-c834-469e-80af-b4e2e02a9be2"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFetching(false)
                                    })
                                
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.toggleIsFetching(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers:{
                                        "API-KEY": "483cd284-c834-469e-80af-b4e2e02a9be2"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFetching(false)
                                    })
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
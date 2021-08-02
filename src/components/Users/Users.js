import s from './UsersItems/Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/1.png'

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0//users').then(response => {
            props.setUsers(response.data.items)
        })
    }


    return (
        <div>
            {props.users.map(u => <div key={u.id} className={s.usersItems}>
                <div className={s.leftBlock}>
                    <img src={u.photos.small != null ? u.photos.small: userPhoto} />
                    <div className={s.button}>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
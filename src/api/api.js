import * as axios from 'axios';

export let profileAPI = {
    getProfile(userId) {
        return (
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.data)
        )
    }
}    


export let authAPI = {
    getAuth() {
        return (
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }).then(response => response.data)
        )
    }
}

export let usersAPI = {
    getUsers(pageSize, currentPage) {
        return (
            axios.get(`https://social-network.samuraijs.com/api/1.0//users?count=${pageSize}&page=${currentPage}`, {
                withCredentials: true
            }).then(response => response.data)
        )
    },
    deleteUsers(id) {
        return (
            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "483cd284-c834-469e-80af-b4e2e02a9be2"
                }
            }).then(response => response.data)
        )
    },
    postUsers(id) {
        return (
            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${id}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "483cd284-c834-469e-80af-b4e2e02a9be2"
                }
            }).then(response => response.data)
        )
    }
}


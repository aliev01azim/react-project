import React from 'react';
import * as axios from 'axios'

const instance=axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{
        'API-KEY':'f9da7b45-d1f3-4ad0-8afa-f6575bd3ff92'
    }
})

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => response.data
        )
    },
    onUsersChanged(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(
            response => response.data
        )
    },
    unfollow(userId) {
        return instance.delete (`follow/${userId}`).then(
            response => response.data);
    },
    follow(userId) {
        return instance.post (`follow/${userId}`,{}).then(
            response => response.data);
        },
}

export const headerApi = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}
export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/`+userId).then(response => response.data);
    }
}







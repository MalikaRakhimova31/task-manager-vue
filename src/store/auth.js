import {defineStore} from 'pinia'
import {BASE_URL} from '../variables';
import axios from "./../plugins/axios";
import {ability} from '../plugins/ability';

export const authStore = defineStore('auth', {
    state: () => {
        return {
            user: [],
            isDark: false,
        };
    },
    getters: {
        getUser: state => state.user,
    },
    actions: {
        async SIGNUP(payload) {
            return await axios({
                method: "POST",
                url: BASE_URL + 'api/auth/signup',   //'https://humdon.asxab.com/api/auth/signup'
                data: payload,
            })
                .then((e) => {
                    return e;
                })
                .catch((error) => {
                    return error;
                })
        },
        async SIGNIN(payload) {
            return await axios({
                method: "POST",
                url: BASE_URL + 'api/auth/login',   //'https://humdon.asxab.com/api/auth/login'
                data: payload,
            })
                .then(async (e) => {
                    this.user = e.data
                    await localStorage.setItem('user', JSON.stringify(e.data));

                    if (e.data.is_admin == '1') {
                        let array = [
                            {
                                action: ['read', 'update', 'delete'],
                                subject: 'admins',
                            },
                            {
                                action: ['read', 'update', 'delete'],
                                subject: 'users',
                            },
                        ]
                        if (e.data.department_type == 'drobilka') {
                            array.push(
                                {
                                    action: ['read', 'update', 'delete'],
                                    subject: 'crusher',
                                },
                            )
                        }
                        ability.update(array)
                    } else {
                        let array = [
                            {
                                action: ['read', 'update', 'delete'],
                                subject: 'users',
                            },
                        ]
                        if (e.data.department_type == 'drobilka') {
                            array.push(
                                {
                                    action: ['read', 'update', 'delete'],
                                    subject: 'crusher',
                                },
                            )
                        }
                        ability.update(array)
                    }
                    return e;
                })
                .catch((error) => {
                    return error;
                })
        },
        async LOGOUT() {
            return await axios({
                method: "POST",
                url: BASE_URL + 'api/logout',   //'https://humdon.asxab.com/api/auth/logout'
            })
            .then((e) => {
                return e;
            })
            .catch((error) => {
                return error;
            })
        },
        async USER_INFO_GET() {
            return await axios({
                method: "GET",
                url: BASE_URL + 'api/v1/user-info',
            })
            .then((e) => {
                return e;
            })
            .catch((error) => {
                return error;
            })
        },
        async USER_PROFILE_UPDATE(payload) {
            return await axios({
                method: "POST",
                url: BASE_URL + 'api/v1/user-profile/update',
                data: payload,
            })
            .then((e) => {
                return e;
            })
            .catch((error) => {
                return error;
            })
        },
        async USER_PROFILE_CHANGE_PASSWORD(payload) {
            return await axios({
                method: "POST",
                url: BASE_URL + 'api/v1/user-profile/change-password',
                data: payload,
            })
            .then((e) => {
                return e;
            })
            .catch((error) => {
                return error;
            })
        },
    },
})
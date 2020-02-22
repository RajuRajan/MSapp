import React from 'react'
import axios from 'axios'
import { API } from '../_helpers/';

export const userService={
    createUser,
    loginUser
}

function createUser(data){
    return  API.post('/user/signup',data)
}
function loginUser(data){
    return  API.post('/user/signin',data)
}
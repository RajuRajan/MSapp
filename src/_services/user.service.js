import React from 'react'
import axios from 'axios'
import { API } from '../_helpers/';

export const userService={
    createUser,
    loginUser,
    bookService
}

function createUser(data){
    return  API.post('/api/user/signup',data)
}
function loginUser(data){
    return  API.post('/api/user/signin',data)
}
function bookService(data){
    return  API.post('/api/user/bookService',data)
}
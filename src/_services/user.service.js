import React from 'react'
import axios from 'axios'
import { API } from '../_helpers/';

export const userService={
    createUser,
    loginUser,
    bookService,
    getBookings,
    getBids,
    bidService,
    getMyBids
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
function getBookings(data){
    return API.post('/api/user/getBookings',data)
}
function getBids(data){
    return API.post('/api/user/getBids',data)
}
function getMyBids(data){
    return API.post('/api/user/getMyBids',data)
}
function bidService(data){
    return API.post('/api/user/bidService',data)
}
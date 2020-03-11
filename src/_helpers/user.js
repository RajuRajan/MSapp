import React from 'react'

export function getUserId(){
    return localStorage.getItem('user_id')
}
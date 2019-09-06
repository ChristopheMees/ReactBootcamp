import React from 'react'
import {useSelector} from 'react-redux'

export default function Welcome()
{
    const username = useSelector(state => state.login.username)
    return <h2>Welcome {username}</h2>
}

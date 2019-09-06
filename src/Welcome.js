import React from 'react'
import {connect} from 'react-redux'

function Welcome({username})
{
    return <h2>Welcome {username}</h2>
}

export default connect(
    state => ({username: state.login.username})
)(Welcome)

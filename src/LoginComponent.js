import React from 'react'
import {connect} from 'react-redux'
import {createAction} from 'redux-starter-kit'

// Actions
const authenticate = createAction('AUTHENTICATE')
const updateUsername = createAction('UPDATE_USERNAME')

// Reducer
export function loginReducer(state = {authenticated: false}, action)
{
    switch(action.type)
    {
        case 'AUTHENTICATE': return ({...state, authenticated: true})
        case 'UPDATE_USERNAME': return ({...state, username: action.payload})
        default: return state
    }
}

function LoginForm({ usernameUpdate, logIn })
{
    return  <form>
                <label>Username</label>
                <input type="text" id="username" onChange={(e) => usernameUpdate(e.target.value)}/>
                <br/>
                <label>Password</label>
                <input type="password" id="password"></input>
                <br/>
                <button type="button" onClick={logIn}>Log me in</button>
            </form>
}

class LoginComponent extends React.Component
{
    render()
    {
        if(this.props.authenticated)
            return  <> { this.props.children } </>

        return  <LoginForm 
                    usernameUpdate={(username) => this.props.updateUsername(username)} 
                    logIn={() => this.props.authenticate()}/>
    }
}

export default connect(
    state => ({authenticated: state.authenticated}),
    {authenticate, updateUsername}
)(LoginComponent)

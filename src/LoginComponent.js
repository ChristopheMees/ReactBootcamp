import React from 'react'
import {connect} from 'react-redux'
import {createSlice} from 'redux-starter-kit'

// Actions
// const authenticate = createAction('AUTHENTICATE')
// const updateUsername = createAction('UPDATE_USERNAME')


// Reducer
// export function loginReducer(state = {authenticated: false}, action)
// {
//     switch(action.type)
//     {
//         case 'AUTHENTICATE': return ({...state, authenticated: true})
//         case 'UPDATE_USERNAME': return ({...state, username: action.payload})
//         default: return state
//     }
// }

// export const loginReducer = createReducer(
//     {authenticated: false},
//     {
//         [authenticate]: state => ({...state, authenticated: true}),
//         [updateUsername]: (state, action) => ({...state, username: action.payload})
//     }
// )

// Slice
export const login = createSlice(
    {
        initialState: {authenticated: false},
        reducers:
        {
            authenticate: state => ({...state, authenticated: true}),
            updateUsername: (state, action) => ({...state, username: action.payload})
        }
    }
)

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

function LoginComponent({authenticated, children, authenticate, updateUsername})
{
    if(authenticated)
        return  <> { children } </>

    return  <LoginForm 
                usernameUpdate={(username) => updateUsername(username)} 
                logIn={() => authenticate()}/>
}

export default connect(
    state => ({authenticated: state.login.authenticated}),
    {authenticate: login.actions.authenticate, updateUsername: login.actions.updateUsername}
)(LoginComponent)

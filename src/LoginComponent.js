import React from 'react'

export const loginContext = React.createContext("")

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

export default class LoginComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {authenticated: false, username: null}
    }

    render()
    {
        if(this.state.authenticated)
            return  <div>
                        <loginContext.Provider value={this.state.username} >
                            { this.props.children }
                        </loginContext.Provider>
                    </div>

        return  <LoginForm 
                    usernameUpdate={(username) => this.setState({username})} 
                    logIn={() => this.setState({authenticated: true})}/>
    }
}

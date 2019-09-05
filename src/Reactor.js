import React from 'react'

function Warning({ temperature })
{
    if(temperature < 50)
    {
        return <h3 style={{color: "rgb(200,100,0"}}>Core temperature is too low!</h3>
    }

    if(temperature > 100)
    {
        return <h3 style={{color: "rgb(255,0,0"}}>Core temperature is too High!</h3>
    }

    return null;
}

export default class Reactor extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {temperature: 0}
    }

    componentDidMount()
    {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount()
    {
        clearInterval(this.timerId)
    }

    tick()
    {
        let temperature = this.state.temperature - Math.random() * 20
        if(temperature <0)
            temperature = 0

        this.setState({temperature})
    }

    onClick()
    {
        return () => this.setState({temperature: this.state.temperature + 10})
    }

    render()
    {
        return  <div>
                    <p>Current temperate: {this.state.temperature}</p>
                    <button type="button" onClick={this.onClick()} >Increase temperature</button>
                    <Warning temperature={this.state.temperature}/>
                </div>
    }
}

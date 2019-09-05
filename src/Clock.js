import React from 'react'

export default class Clock extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {now: new Date()}
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
        this.setState({now: new Date()})
    }

    render()
    {
        return <h2>{this.state.now.toLocaleTimeString()}</h2>
    }
}

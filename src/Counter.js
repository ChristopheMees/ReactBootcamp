import React from 'react'

function CurrenctCount(props)
{
    return <p>Current count: {props.count}</p>
}

function CounterBtn(props)
{
    return <button type="button" onClick={props.click}>Click me</button>
}

export default class Counter extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {count: 0};
    }

    render()
    {
        return  <div>
                    <CurrenctCount count={this.state.count}/>
                    <CounterBtn click = {() => this.setState({count: this.state.count + 1})}/>
                </div>
    }
}

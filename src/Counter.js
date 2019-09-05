import React from 'react'

import CurrenctCount from './CurrenctCount'

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

    onClick()
    {
        const { amount, click } = this.props
        this.setState({count: this.state.count + amount})
        click(amount)
    }

    render()
    {
        return  <div>
                    <CurrenctCount count={this.state.count}/>
                    <CounterBtn click = {() => this.onClick()}/>
                </div>
    }
}

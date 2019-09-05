import React from 'react'

import Counter from './Counter'
import CurrenctCount from './CurrenctCount'

export default class MainCounter extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {count: 0}
    }

    onClick()
    {
        return (amount) => this.setState({count: this.state.count + amount})
    }

    render()
    {
        const countersArr = this.props.counters;
        return  <div>
                    { countersArr.map((amount) => <Counter id={amount} key={amount} amount={amount} click={this.onClick()}/>) }
                    <br/>
                    <CurrenctCount count={this.state.count}/>
                </div>
    }
}

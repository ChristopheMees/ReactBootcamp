import React from 'react'
import {connect} from 'react-redux'

import CurrenctCount from './CurrenctCount'


function CounterBtn(props)
{
    return <button type="button" onClick={props.click}>Click me</button>
}

class Counter extends React.Component
{
    // shouldComponentUpdate(newProps)
    // {
    //     return this.props.count !== newProps.count
    // }

    // onClick()
    // {
    //     const { amount, click } = this.props
    //     this.setState({count: this.state.count + amount})
    //     click(amount)
    // }

    render()
    {
        const {id, counter, click} = this.props
        console.log('Rendering ', id)
        return  <div>
                    <CurrenctCount count={counter[id] ? counter[id].count : 0}/>
                    <CounterBtn click = {() => click()}/>
                </div>
    }
}

export default connect(
    state => ({counter: state.counter})
)(Counter)

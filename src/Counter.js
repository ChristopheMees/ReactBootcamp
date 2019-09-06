import React from 'react'
import {connect} from 'react-redux'
import { createSlice } from 'redux-starter-kit';

import CurrenctCount from './CurrenctCount'


function CounterBtn(props)
{
    return <button type="button" onClick={props.click}>Click me</button>
}

// Slice
export const counter = createSlice(
    {
        initialState: {count: 0},
        reducers:
        {
            clicked: (state, action) => {
                if(!state[action.payload.id])
                    state[action.payload.id] = {count: action.payload.amount}
                else
                    state[action.payload.id].count+=action.payload.amount
            }
        }
    }
)

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
        const {id, amount, counter, clicked} = this.props
        console.log('Rendering ', id)
        return  <div>
                    <CurrenctCount count={counter[id] ? counter[id].count : 0}/>
                    <CounterBtn click = {() => clicked({id, amount})}/>
                </div>
    }
}

export default connect(
    state => ({counter: state.counter}),
    {clicked: counter.actions.clicked}
)(Counter)

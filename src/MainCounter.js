import React from 'react'
import { connect, useDispatch, batch } from 'react-redux';
import {createSlice}from 'redux-starter-kit'

import Counter from './Counter'
import CurrenctCount from './CurrenctCount'
import { async } from 'q';

// Slice
export const counter = createSlice(
    {
        initialState: {total: 0},
        reducers:
        {
            clicked: (state, action) => {
                if(!state[action.payload.id])
                    state[action.payload.id] = {count: action.payload.amount}
                else
                    state[action.payload.id].count+=action.payload.amount

                state.total+=action.payload.amount
            }
        }
    }
)

const delay = ms => new Promise(res => setTimeout(res, ms))

//redux thunk
function incrementThunk()
{
    return async (dispatch, getState) => {
        dispatch(counter.actions.clicked({id: 'counter0', amount: 2}))
        await delay(2000)
        batch(() => {
            dispatch(counter.actions.clicked({id: 'counter0', amount: 2}))
            dispatch(counter.actions.clicked({id: 'counter0', amount: 2}))
        })
    }
}

function MainCounter({counters,total})
{
    const dispatch = useDispatch()
    return  <div>
                { counters.map((amount, idx) => <Counter    id={'counter' + idx} 
                                                            key={amount}
                                                            click={() => dispatch(incrementThunk({id: 'counter' + idx, amount}))}/>) }
                <br/>
                <CurrenctCount count={total}/>
            </div>
}

export default connect(
    state => ({total: state.counter.total})
)(MainCounter)

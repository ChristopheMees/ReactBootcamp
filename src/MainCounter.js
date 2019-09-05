import React from 'react'

import Counter from './Counter'

export default class MainCounter extends React.Component
{
    render()
    {
        return  <div>
                    <Counter/>
                    <Counter/>
                    <Counter/>
                    <Counter/>
                </div>
    }
}

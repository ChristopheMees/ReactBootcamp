import React, {useState} from 'react'

import CurrentCount from './CurrenctCount'

export default function HookCounter(props)
{
    const [count, setCount] = useState(0)
    return  <>
                <CurrentCount count={count}/>
                <button type="button" onClick={() => setCount(count + 1)}>Click me</button>
            </>
}

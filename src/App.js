import React, { Suspense } from 'react'

import Clock from './Clock'
import LoginComponent, { loginContext } from './LoginComponent'
import ErrorBoundary from './ErrorBoundary'

const Reactor = React.lazy(() => import('./Reactor'))
const MainCounter = React.lazy(() => import('./MainCounter'))
const HookCounter = React.lazy(() => import('./HookCounter'))
const Requirements = React.lazy(() => import('./Requirement'))

const ReffedInputField = React.forwardRef((props, ref) => <input ref={ref} type="text" {...props}/>)

class ShadowRef extends React.Component
{

  onChange(val)
  {
    this.props.inputRef.current.value = val;
  }

  render()
  {
    return <input type="text" onChange={(e) => this.onChange(e.target.value)}/>
  }
}

class Welcome extends React.Component
{
  static contextType = loginContext

  render()
  {
    return <h2>Welcome {this.context}</h2>
  }
}

export default function App()
{
  const ref = React.createRef()
  return  <>
            <ErrorBoundary>
              <Clock />
              <Suspense fallback={<div>Waiting on some code...</div>}>
                <Requirements/>
              </Suspense>
            </ErrorBoundary>
          </>
}

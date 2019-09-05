import React, { Suspense } from 'react'

import Clock from './Clock'
import LoginComponent, { loginContext } from './LoginComponent'
import ErrorBoundary from './ErrorBoundary'

const Reactor = React.lazy(() => import('./Reactor'))

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
  return  <div>
            <ErrorBoundary>
              <Clock />
              <Suspense fallback={<div>Waiting on some code...</div>}>
                <LoginComponent>
                  <Welcome/>
                  <Reactor/>
                </LoginComponent>
              </Suspense>
            </ErrorBoundary>
          </div>
}

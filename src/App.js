import React, { Suspense } from 'react'
import {Provider} from 'react-redux'
import {configureStore} from 'redux-starter-kit'

import Clock from './Clock'
import LoginComponent, { loginReducer } from './LoginComponent'
import ErrorBoundary from './ErrorBoundary'

const MainCounter = React.lazy(() => import('./MainCounter'))

class Welcome extends React.Component
{
  render()
  {
    return <h2>Welcome test</h2>
  }
}

const store = configureStore({reducer: loginReducer})

export default function App()
{
  return  <>
            <Provider store={store}>
              <ErrorBoundary>
                <Clock />
                <Suspense fallback={<div>Waiting on some code...</div>}>
                  <LoginComponent>
                    <Welcome/>
                    <MainCounter counters={[2,4,8,16,32]}/>
                  </LoginComponent>
                </Suspense>
              </ErrorBoundary>
            </Provider>
          </>
}

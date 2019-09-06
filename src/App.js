import React, { Suspense } from 'react'
import {Provider} from 'react-redux'
import {configureStore, combineReducers, getDefaultMiddleware} from 'redux-starter-kit'
import {createLogger} from 'redux-logger'

import Clock from './Clock'
import LoginComponent, { login } from './LoginComponent'
import ErrorBoundary from './ErrorBoundary'
import Welcome from './Welcome'
import {counter} from './Counter'

const MainCounter = React.lazy(() => import('./MainCounter'))

const rootReducer = combineReducers({
  login: login.reducer,
  counter: counter.reducer
})

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), createLogger()]
  })

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

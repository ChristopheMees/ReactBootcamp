import React, { Suspense } from 'react'
import {Provider} from 'react-redux'
import {configureStore, combineReducers, getDefaultMiddleware} from 'redux-starter-kit'
import {createLogger} from 'redux-logger'

import Clock from './Clock'
import LoginComponent, { login } from './LoginComponent'
import ErrorBoundary from './ErrorBoundary'
import Welcome from './Welcome'
import {counter} from './MainCounter'

import Requirements from './Requirement'

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
            <Requirements/>
          </>
}

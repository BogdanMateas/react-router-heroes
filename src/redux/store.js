import { createStore, combineReducers } from 'redux'
import { userReducer } from './user/reducer';

const reducers = combineReducers({ user: userReducer })

export const store = createStore(reducers)

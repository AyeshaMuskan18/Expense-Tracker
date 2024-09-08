import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { expensesReducer } from './expensesReducer';

const rootReducer = combineReducers({expenses: expensesReducer});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export default store;
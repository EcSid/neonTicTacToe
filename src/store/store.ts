import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { gameInfoSlice } from './reducers/gameInfoReducer'

const rootReducer = combineReducers({
	gameInfo: gameInfoSlice.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type IRootReducer = ReturnType<typeof rootReducer>

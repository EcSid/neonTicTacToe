import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IGameInfoState {
	turn: 'zero' | 'cross'
	field: string[][]
}

export interface IActionField {
	name: 'zero' | 'cross'
	position: number[]
}

const initialState: IGameInfoState = {
	turn: 'zero',
	field: [[], [], []],
}

export const gameInfoSlice = createSlice({
	name: 'gameInfo',
	initialState,
	reducers: {
		setNewTurn(state) {
			state.turn = state.turn === 'cross' ? 'zero' : 'cross'
		},
		setNewField(state, action: PayloadAction<IActionField>) {
			state.field[action.payload.position[0]][action.payload.position[1]] =
				action.payload.name
		},
	},
})

import { createSlice } from '@reduxjs/toolkit'

interface IExspensesResponse {
	title: string
	amount: number
}

interface IInitialState {
	listExspenses: IExspensesResponse | null | number
}

const initialState: IInitialState = {
	listExspenses: 5,
}

const slice = createSlice({
	name: 'exspenses',
	initialState,
	reducers: {},
})

export default slice.reducer

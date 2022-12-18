import {createSlice, PayloadAction} from '@reduxjs/toolkit'
//tu jest obiekt nie tablica, z dwoma wartościami: title który jest key i valu który jest string lub number//
interface IExspensesResponse {
	title: string
	amount: string,
}


interface IInitialState {
	listExspenses: IExspensesResponse | null;
}

const initialState: IInitialState = {
	listExspenses: null,
}

const slice = createSlice({
	name: 'exspenses',
	initialState,
	reducers: {
		sentFromData: (state,action:PayloadAction<IExspensesResponse>) => {
			console.log(action, 'redux action');
			state.listExspenses = action.payload

		},
		sentFromDataTest: (state,action:PayloadAction<IExspensesResponse>) => {
			console.log(action, 'redux action');
			state.listExspenses = action.payload

		}
	},
})
export const {sentFromData} = slice.actions
export default slice.reducer

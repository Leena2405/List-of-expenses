import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '..';
import ExspensesReducer from './reducers/Exspenses/slice';


export const rootReducer = combineReducers({
    exspenses:ExspensesReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch: () => AppDispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

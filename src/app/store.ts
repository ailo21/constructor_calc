import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calculatorReducer from "../features/calculator/calculatorSlice";

// const rootReducer=combineReducers({
//   counter: counterReducer,
//   // calculator: calculatorSlice
// })
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

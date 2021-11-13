import {CalcPartial} from "./model/CalcPartial";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface CalcState {
    isEditMode: boolean,
    enablePartial: CalcPartial[]
    disablePartial: CalcPartial[]
}

const initialState: CalcState = {
    isEditMode: false,
    disablePartial: [],
    enablePartial: []
}
export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        toggleEditMode: (state) => {
            state.isEditMode = !state.isEditMode
        }
    }
})
export const {toggleEditMode} = calculatorSlice.actions;
export const selectEditMode = (state: RootState) => state.calculator.isEditMode;
export default calculatorSlice.reducer;
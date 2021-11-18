import {CalcPartial, CalcPartialEnum} from "./model/CalcPartial";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface CalcState {
    isEditMode: boolean,
    partials: PartCalc
}
export interface  PartCalc{
    [index: string]: any,
    constructor: {
        id: 'constructor',
        list: CalcPartial[]
    },
    calculator: {
        id: 'calculator',
        list: CalcPartial[]
    },
}

const initialState: CalcState = {
    isEditMode: false,
    partials: {
        constructor: {
            id: 'constructor',
            list: [
                {sort: 1, elementCalc: CalcPartialEnum.CalcDisplay},
                {sort: 2, elementCalc: CalcPartialEnum.CalcNumbers},
                {sort: 3, elementCalc: CalcPartialEnum.CalcEqual}

            ]
        },
        calculator: {
            id: 'calculator',
            list: [

            ]
        },
    }
}

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        toggleEditMode: (state) => {
            state.isEditMode = !state.isEditMode
        },
        changePartials: (state, action:PayloadAction<PartCalc>) => {

            state.partials=action.payload;

        }
    }
})
export const {toggleEditMode, changePartials} = calculatorSlice.actions;

export const selectEditMode = (state: RootState) => state.calculator.isEditMode;
export const selectPartials = (state: RootState) => state.calculator.partials;

export default calculatorSlice.reducer;
import {CalcPartial, CalcPartialEnum} from "./model/CalcPartial";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface CalcState {
    isEditMode: boolean,
    structure: PartCalc
}

export interface PartCalc {
    [index: string]: any,
    constructor:{
        id:'constructor',
        list: CalcPartial[]
    },
    calculator: {
        id: 'calculator',
        list: CalcPartial[]
    },
}

const initialState: CalcState = {
    isEditMode: true,
    structure: {
        constructor:{
            id:'constructor',
            list:[
                {sort: 1, elementCalc: CalcPartialEnum.CalcDisplay},
                {sort: 2, elementCalc: CalcPartialEnum.CalcNumbers}
            ]
        },
        calculator: {
            id: 'calculator',
            list: [{sort: 3, elementCalc: CalcPartialEnum.CalcEqual}]
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
        changePartials: (state, action: PayloadAction<PartCalc>) => {
            debugger;
            state.structure=action.payload;
        },

    }
})
export const {toggleEditMode, changePartials} = calculatorSlice.actions;

export const selectEditMode = (state: RootState) => state.calculator.isEditMode;
export const selectPartials = (state: RootState) => state.calculator.structure;

export default calculatorSlice.reducer;
import {CalcPartial, CalcPartialEnum} from "./model/CalcPartial";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface CalcState {
    isEditMode: boolean,
    structure: PartCalc
}

export interface PartCalc {
    [index: string]: any,
    arialDisplay: {
        id: 'arialDisplay',
        item?: CalcPartial
    },
    arialNumbers: {
        id: 'arialNumbers',
        item?: CalcPartial
    },
    ariaEqual: {
        id: 'ariaEqual',
        item?: CalcPartial
    },

    calculator: {
        id: 'calculator',
        list: CalcPartial[]
    },
}

const initialState: CalcState = {
    isEditMode: false,
    structure: {
        arialDisplay: {
            id: 'arialDisplay',
            item: {sort: 1, elementCalc: CalcPartialEnum.CalcDisplay}
        },
        arialNumbers: {
            id: 'arialNumbers',
            item: {sort: 2, elementCalc: CalcPartialEnum.CalcNumbers}
        },
        ariaEqual: {
            id: 'ariaEqual',
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

            if(action.payload['arialDisplay']!=undefined){
                state.structure.arialDisplay=action.payload['arialDisplay'];
            }
            if(action.payload['arialNumbers']!=undefined){
                state.structure.arialNumbers=action.payload['arialNumbers'];
            }
            if(action.payload['ariaEqual']!=undefined){
                state.structure.ariaEqual=action.payload['ariaEqual'];
            }
            if(action.payload['calculator']!=undefined){
                state.structure.calculator=action.payload['calculator'];
            }
            debugger;
        },

    }
})
export const {toggleEditMode, changePartials} = calculatorSlice.actions;

export const selectEditMode = (state: RootState) => state.calculator.isEditMode;
export const selectPartials = (state: RootState) => state.calculator.structure;

export default calculatorSlice.reducer;
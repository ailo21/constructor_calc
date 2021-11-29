import {CalcPartial, CalcPartialEnum} from "./model/CalcPartial";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {operationEnum} from "./model/Operation";

export interface CalcState {
    isEditMode: boolean,
    structure: PartCalc,
    displayProp: displayProp
}

type displayProp = {
    operand1: number | undefined,
    operand2: number | undefined,
    operation: operationEnum | undefined
}

export interface PartCalc {
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
    isEditMode: true,
    displayProp: <displayProp>{
        operand1: 0,
        operation: undefined
    },
    structure: {
        constructor: {
            id: 'constructor',
            list: [
                {sort: 1, elementCalc: CalcPartialEnum.CalcDisplay},
                {sort: 2, elementCalc: CalcPartialEnum.CalcNumbers},
                {sort: 3, elementCalc: CalcPartialEnum.CalcEqual},
                {sort: 4, elementCalc: CalcPartialEnum.CalcOperationList},
            ]
        },
        calculator: {
            id: 'calculator',
            list: []
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
            state.structure = action.payload;
        },
        addOperand1: (state, action: PayloadAction<number>) => {
            if (state.displayProp.operand1 != undefined)
                state.displayProp.operand1 = Number(state.displayProp.operand1 + '' + action.payload);
        },
        addOperation: (state, action: PayloadAction<operationEnum>) => {
            state.displayProp.operation = action.payload;
        },
        addOperand2: (state, action: PayloadAction<number>) => {
            state.displayProp.operand2 = (state.displayProp.operand2 != undefined) ?
                Number(state.displayProp.operand2 + '' + action.payload)
                : action.payload
        }

    }
})
export const {
    toggleEditMode,
    changePartials,
    addOperand1,
    addOperand2,
    addOperation
} = calculatorSlice.actions;

export const selectEditMode = (state: RootState) => state.calculator.isEditMode;
export const selectPartials = (state: RootState) => state.calculator.structure;

//calc
export const selectDisplayOperand1 = (state: RootState) => state.calculator.displayProp.operand1;
export const selectDisplayOperand2 = (state: RootState) => state.calculator.displayProp.operand2;
export const selectDisplayOperation = (state: RootState) => state.calculator.displayProp.operation;

export const selectDisplay = (state: RootState) => {
    let value = '';
    value = String(state.calculator.displayProp.operand1 ?? '');
    value += String(state.calculator.displayProp.operation ?? '');
    value += String(state.calculator.displayProp.operand2 ?? '');


    return value;
};

export default calculatorSlice.reducer;
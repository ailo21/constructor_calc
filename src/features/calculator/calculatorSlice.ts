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
    operation: operationEnum | undefined,
    compute: number | undefined,
    isComputedResult: boolean
}

export interface PartCalc {
    [index: string]: any,

    arialDisplay: {
        id: 'arialDisplay',
        list: CalcPartial[]
    },
    ariaOperation: {
        id: 'ariaOperation',
        list: CalcPartial[]
    },
    arialNumbers: {
        id: 'arialNumbers',
        list: CalcPartial[]
    },
    ariaEqual: {
        id: 'ariaEqual',
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
        operand1: undefined,
        operand2: undefined,
        operation: undefined,
        compute: undefined,
        isComputedResult: false
    },


    structure: {

        arialDisplay: {
            id: 'arialDisplay',
            list: [{sort: 1, elementCalc: CalcPartialEnum.CalcDisplay},]
        },
        ariaOperation: {
            id: 'ariaOperation',
            list: [{sort: 2, elementCalc: CalcPartialEnum.CalcOperationList},]
        },
        arialNumbers: {
            id: 'arialNumbers',
            list: [{sort: 3, elementCalc: CalcPartialEnum.CalcNumbers}]
        },
        ariaEqual: {
            id: 'ariaEqual',
            list: [{sort: 4, elementCalc: CalcPartialEnum.CalcEqual}]
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
        deleteFromCalculator: (state, action: PayloadAction<CalcPartial>) => {

            switch (action.payload.elementCalc) {
                case CalcPartialEnum.CalcDisplay:
                    state.structure.arialDisplay.list.push(action.payload)
                    break;
                case CalcPartialEnum.CalcEqual:
                    state.structure.ariaEqual.list.push(action.payload)
                    break;
                case CalcPartialEnum.CalcNumbers:
                    state.structure.arialNumbers.list.push(action.payload)
                    break;
                case CalcPartialEnum.CalcOperationList:
                    state.structure.ariaOperation.list.push(action.payload)
                    break;
                default:
                    break;
            }
            const displayIndex = state.structure.calculator.list.findIndex((f: CalcPartial) => f.elementCalc == action.payload.elementCalc);
            state.structure.calculator.list.splice(displayIndex, 1);

        },
        changePartials: (state, action: PayloadAction<PartCalc>) => {

            if (action.payload['arialDisplay'] != undefined) {
                state.structure.arialDisplay = action.payload['arialDisplay'];
            }
            if (action.payload['arialNumbers'] != undefined) {
                state.structure.arialNumbers = action.payload['arialNumbers'];
            }
            if (action.payload['ariaEqual'] != undefined) {
                state.structure.ariaEqual = action.payload['ariaEqual'];
            }
            if (action.payload['ariaOperation'] != undefined) {
                state.structure.ariaOperation = action.payload['ariaOperation'];
            }
            if (action.payload['calculator'] != undefined) {
                state.structure.calculator = action.payload['calculator'];
            }
        },
        addOperand1: (state, action: PayloadAction<number>) => {
            state.displayProp.operand1 =
                (state.displayProp.operand1 != undefined) ?
                    Number(state.displayProp.operand1 + '' + action.payload)
                    : action.payload;
        },
        addOperation: (state, action: PayloadAction<operationEnum>) => {
            state.displayProp.operation = action.payload;
        },
        displayClear: (state) => {
            state.displayProp = initialState.displayProp;
        },
        addOperand2: (state, action: PayloadAction<number>) => {
            state.displayProp.operand2 = (state.displayProp.operand2 != undefined) ?
                Number(state.displayProp.operand2 + '' + action.payload)
                : action.payload
        },
        computedResult: (state) => {
            let result: number = 0;
            const operand1 = state.displayProp.operand1!;
            const operand2 = state.displayProp.operand2!;
            switch (state.displayProp.operation) {
                case  operationEnum.fold:
                    result = operand1 + operand2;
                    break;
                case operationEnum.subtract:
                    result = operand1 - operand2;
                    break;
                case operationEnum.multiply:
                    result = operand1 * operand2;
                    break;
                case operationEnum.division:
                    result = operand1 / operand2;
                    break;
            }
            state.displayProp.compute = result;
            state.displayProp.isComputedResult = true
        }


    }
})
export const {
    toggleEditMode,
    deleteFromCalculator,
    changePartials,
    addOperand1,
    addOperand2,
    addOperation,
    displayClear,
    computedResult
} = calculatorSlice.actions;

export const selectEditMode = (state: RootState) => state.calculator.isEditMode;
export const selectPartials = (state: RootState) => state.calculator.structure;

//calc
export const selectDisplayOperand1 = (state: RootState) => state.calculator.displayProp.operand1;
export const selectDisplayOperand2 = (state: RootState) => state.calculator.displayProp.operand2;
export const selectDisplayOperation = (state: RootState) => state.calculator.displayProp.operation;
export const selectIsComputedResult = (state: RootState) => state.calculator.displayProp.isComputedResult;

export const selectDisplay = (state: RootState) => {
    let value = '';
    if (state.calculator.displayProp.compute === undefined) {
        value = String(state.calculator.displayProp.operand1 ?? '');
        value += String(state.calculator.displayProp.operation ?? '');
        value += String(state.calculator.displayProp.operand2 ?? '');
    } else {
        value = state.calculator.displayProp.compute.toString();
    }
    return value;
};

export default calculatorSlice.reducer;
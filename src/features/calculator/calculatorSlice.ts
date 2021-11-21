import {CalcPartial, CalcPartialEnum} from "./model/CalcPartial";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface CalcState {
    isEditMode: boolean,
    structure: PartCalc
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
    structure: {
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
        removePartial: (state, action: PayloadAction<CalcPartial>) => {
            debugger;
            if (state.structure.calculator.list.some(o => o.sort === action.payload.sort)) {
                //уберем элемент из калькулятора
                const newCalculatorList = state.structure.calculator.list.map(f => f.sort !== action.payload.sort);
                state.structure.calculator.list = Object.assign([], newCalculatorList);

                //вставляем этот элемент в конструктор
                const newConstructorList=[...state.structure.constructor.list, action.payload];
                state.structure.constructor.list = Object.assign([],newConstructorList);
            }


        }

    }
})
export const {toggleEditMode, changePartials, removePartial} = calculatorSlice.actions;

export const selectEditMode = (state: RootState) => state.calculator.isEditMode;
export const selectPartials = (state: RootState) => state.calculator.structure;

export default calculatorSlice.reducer;
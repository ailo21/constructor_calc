import React from 'react';
import CalcNumber from "./CalcNumber";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {
    addOperand1, addOperand2, displayClear,
    selectDisplayOperation, selectIsComputedResult
} from "../../features/calculator/calculatorSlice";

const CalcNumbersList = () => {
    const dispatch = useAppDispatch();
    const operation = useAppSelector(selectDisplayOperation);
    const computedResult = useAppSelector(selectIsComputedResult);

    const clickHandlerNum = (num: number) => {
        if(computedResult){
            dispatch(displayClear())
            dispatch(addOperand1(num))
        }
        else{
            if(operation===undefined){
                dispatch(addOperand1(num))
            }
            else{
                dispatch(addOperand2(num))
            }
        }


    }

    return (
        <div  className={"calc_partial"}>
            <div className={'row'}>
                <CalcNumber num={7} onClick={() => clickHandlerNum(7)}/>
                <CalcNumber num={8} onClick={() => clickHandlerNum(8)}/>
                <CalcNumber num={9} onClick={() => clickHandlerNum(9)}/>
            </div>
            <div className={'row'}>
                <CalcNumber num={4} onClick={() => clickHandlerNum(4)}/>
                <CalcNumber num={5} onClick={() => clickHandlerNum(5)}/>
                <CalcNumber num={6} onClick={() => clickHandlerNum(6)}/>
            </div>
            <div className={'row'}>
                <CalcNumber num={1} onClick={() => clickHandlerNum(1)}/>
                <CalcNumber num={2} onClick={() => clickHandlerNum(2)}/>
                <CalcNumber num={3} onClick={() => clickHandlerNum(3)}/>
            </div>
            <div className={'row'}>
                <CalcNumber num={0} onClick={() => clickHandlerNum(0)}/>
            </div>


        </div>
    );
};

export default CalcNumbersList;
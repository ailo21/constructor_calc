import React from 'react';
import CalcNumber from "./CalcNumber";
import s from './Calc.module.css'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {
    addOperand1, addOperand2,
    selectDisplayOperand1, selectDisplayOperand2, selectDisplayOperation, toggleEditMode
} from "../../features/calculator/calculatorSlice";

const CalcNumbersList = () => {
    const dispatch = useAppDispatch();
    // const operand1 = useAppSelector(selectDisplayOperand1);
    // const operand2 = useAppSelector(selectDisplayOperand2);
    const operation = useAppSelector(selectDisplayOperation);

    const clickHandlerNum = (num: number) => {
        debugger;
        if(operation===undefined){
            dispatch(addOperand1(num))
        }
        else{
            debugger;
            dispatch(addOperand2(num))
        }
    }

    return (
        <div  className={"calc_partial"}>
            <div className={s.row}>
                <CalcNumber num={7} onClick={() => clickHandlerNum(7)}/>
                <CalcNumber num={8} onClick={() => clickHandlerNum(8)}/>
                <CalcNumber num={9} onClick={() => clickHandlerNum(9)}/>
            </div>
            <div className={s.row}>
                <CalcNumber num={4} onClick={() => clickHandlerNum(4)}/>
                <CalcNumber num={5} onClick={() => clickHandlerNum(5)}/>
                <CalcNumber num={6} onClick={() => clickHandlerNum(6)}/>
            </div>
            <div className={s.row}>
                <CalcNumber num={1} onClick={() => clickHandlerNum(1)}/>
                <CalcNumber num={2} onClick={() => clickHandlerNum(2)}/>
                <CalcNumber num={3} onClick={() => clickHandlerNum(3)}/>
            </div>
            <div className={s.row}>
                <CalcNumber num={0} onClick={() => clickHandlerNum(0)}/>
            </div>


        </div>
    );
};

export default CalcNumbersList;
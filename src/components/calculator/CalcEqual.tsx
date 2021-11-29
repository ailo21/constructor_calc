import React from 'react';
import s from './Calc.module.css';
import {useAppDispatch} from "../../app/hooks";
import {computedResult} from "../../features/calculator/calculatorSlice";

const CalcEqual = () => {
    const dispatch = useAppDispatch();
    const clickHandlerResult=()=>{
        dispatch(computedResult())
    }
    return (
        <div  className={"calc_partial"}>
            <button className={s.operation} onClick={()=>clickHandlerResult()}>
                =
            </button>
        </div>
    );
};

export default CalcEqual;
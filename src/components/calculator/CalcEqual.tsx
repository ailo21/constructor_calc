import React from 'react';
import {useAppDispatch} from "../../app/hooks";
import {computedResult} from "../../features/calculator/calculatorSlice";

const CalcEqual = () => {
    const dispatch = useAppDispatch();
    const clickHandlerResult=()=>{
        dispatch(computedResult())
    }
    return (
        <div  className={"calc_partial"}>
            <button className={'operation'} onClick={()=>clickHandlerResult()}>
                =
            </button>
        </div>
    );
};

export default CalcEqual;
import React, {FC} from 'react';
import {operationEnum} from "../../features/calculator/model/Operation";
import s from './Calc.module.css'

interface Props {
    operation: operationEnum,
    onClick : (operation:operationEnum) => void
}
const CalcOperation:FC<Props> = ({operation,onClick}) => {
    return (
        <button
            className={s.operation_item}
            onClick={()=>{
                onClick(operation)
            }}
        >
            {operation}
        </button>
    );
};

export default CalcOperation;
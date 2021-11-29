import React, {FC} from 'react';
import {operationEnum} from "../../features/calculator/model/Operation";

interface Props {
    operation: operationEnum,
    onClick : (operation:operationEnum) => void
}
const CalcOperation:FC<Props> = ({operation,onClick}) => {
    return (
        <button
            className={'operation_item'}
            onClick={()=>{
                onClick(operation)
            }}
        >
            {operation}
        </button>
    );
};

export default CalcOperation;
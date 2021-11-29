import React, {FC} from 'react';
import s from './Calc.module.css'
import CalcOperation from "./CalcOperation";
import {operationEnum} from "../../features/calculator/model/Operation";
import {useAppDispatch} from "../../app/hooks";
import {addOperation} from "../../features/calculator/calculatorSlice";

const CalcOperationList: FC = () => {
    const dispatch = useAppDispatch();

    const clickHandlerOperation = (operation: operationEnum) => {
        dispatch(addOperation(operation))
    }
    const operationList = [
        operationEnum.fold,
        operationEnum.subtract,
        operationEnum.multiply,
        operationEnum.division,
    ];

    return (
        <div className={""}>
            <div className={s.row}>
                {
                    operationList.map(o => <CalcOperation operation={o} onClick={() => clickHandlerOperation(o)}/>)
                }
            </div>
        </div>
    );
};

export default CalcOperationList;
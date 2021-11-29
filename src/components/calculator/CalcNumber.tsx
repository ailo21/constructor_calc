import React, {FC} from 'react';
import s from './Calc.module.css'
import {toggleEditMode} from "../../features/calculator/calculatorSlice";
import {useAppDispatch} from "../../app/hooks";

interface Props {
    num: number,
    onClick : (num:number) => void
}

const CalcNumber: FC<Props> = ({num,onClick}) => {


    return (
        <button className={s.num} onClick={() => {
            onClick(num)
        }}>
            {num}
        </button>
    );
};

export default CalcNumber;
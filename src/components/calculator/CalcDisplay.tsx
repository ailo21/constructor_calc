import React, {useEffect} from 'react';
import s from './Calc.module.css';
import {useAppSelector} from "../../app/hooks";
import {
    selectDisplay
} from "../../features/calculator/calculatorSlice";

const CalcDisplay = () => {
    const displayValue = useAppSelector(selectDisplay);

    return (
        <div className={s.display_wrap}>
            <input readOnly={true} value={displayValue} className={s.display} type={"text"}/>
        </div>
    );
};

export default CalcDisplay;
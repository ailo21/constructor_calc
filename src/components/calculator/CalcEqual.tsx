import React from 'react';
import s from './Calc.module.css';

const CalcEqual = () => {
    return (
        <div  className={"calc_partial"}>
            <button className={s.operation}>
                =
            </button>
        </div>
    );
};

export default CalcEqual;
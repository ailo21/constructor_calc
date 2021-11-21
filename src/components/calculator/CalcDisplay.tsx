import React from 'react';
import s from './Calc.module.css';

const CalcDisplay = () => {
    return (
        <div className={s.display_wrap}>
            <input className={s.display} type={"text"}/>
        </div>
    );
};

export default CalcDisplay;
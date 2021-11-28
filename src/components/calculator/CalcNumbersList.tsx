import React from 'react';
import CalcNumber from "./CalcNumber";
import s from './Calc.module.css'

const CalcNumbersList = () => {

    return (
        <div className={""}>
            <div className={s.row}>
                <CalcNumber num={7}/>
                <CalcNumber num={8}/>
                <CalcNumber num={9}/>
            </div>
            <div className={s.row}>
                <CalcNumber num={4}/>
                <CalcNumber num={5}/>
                <CalcNumber num={6}/>
            </div>
            <div className={s.row}>
                <CalcNumber num={1}/>
                <CalcNumber num={2}/>
                <CalcNumber num={3}/>
            </div>
            <div className={s.row}>
                <CalcNumber num={0}/>
            </div>


        </div>
    );
};

export default CalcNumbersList;
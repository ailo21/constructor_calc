import React, {FC} from 'react';
import s from './Calc.module.css'

interface Props {
    num: number,
}

const CalcNumber:FC<Props> = ({num}) => {
    return (
        <button className={s.num}>
            {num}
        </button>
    );
};

export default CalcNumber;
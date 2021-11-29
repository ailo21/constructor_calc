import React from 'react';

import {useAppSelector} from "../../app/hooks";
import {
    selectDisplay
} from "../../features/calculator/calculatorSlice";

const CalcDisplay = () => {
    const displayValue = useAppSelector(selectDisplay);

    return (
        <div className={"calc_partial calc_partial_display"}>
            <input readOnly={true} value={displayValue} className={'display'} type={"text"} placeholder={'0'}/>
        </div>
    );
};

export default CalcDisplay;
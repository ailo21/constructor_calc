import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectEditMode, toggleEditMode} from "./calculatorSlice";

const Calculator = () => {
    const dispatch = useAppDispatch();
    const isEditMode = useAppSelector(selectEditMode);


    return (
        <div>
            <button
                onClick={() => dispatch(toggleEditMode())}
            >
                toggle
            </button>

            <p>{isEditMode ? "edit mode" : "not edit mode"}</p>
        </div>
    );
};

export default Calculator;
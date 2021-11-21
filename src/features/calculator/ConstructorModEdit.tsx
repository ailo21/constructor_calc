import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectEditMode, toggleEditMode} from "./calculatorSlice";

const ConstructorModEdit = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button
                onClick={() => dispatch(toggleEditMode())}
            >
                toggle
            </button>
        </div>
    );
};

export default ConstructorModEdit;
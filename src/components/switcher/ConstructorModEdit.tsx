import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectEditMode, toggleEditMode} from "../../features/calculator/calculatorSlice";
import { ReactComponent as SeeSvg } from '../../asset/icon/icon_see.svg';
import { ReactComponent as CodeSvg } from '../../asset/icon/icon_code.svg.svg';
import '../switcher/switcher.css'

const ConstructorModEdit = () => {
    const dispatch = useAppDispatch();
    const isEditMode = useAppSelector(selectEditMode);
    let runtimeClass=['mode','mode_runtime'];
    let constructorClass=['mode','mode_constructor'];
    if(isEditMode){
        runtimeClass.push('active')
    }
    else{
        constructorClass.push('active')
    }
    return (
        <div className={'switcher_wrap'}>
            <div className={'switcher'}>
                <button
                    className={runtimeClass.join(' ')}
                    onClick={() => dispatch(toggleEditMode())}
                >
                    <span>Runtime</span>
                </button>
                <button
                    className={constructorClass.join(' ')}
                    onClick={() => dispatch(toggleEditMode())}
                >
                    <span>Constructor</span>
                </button>

                <div className={'switcher_border '+(isEditMode?'switcher_border_edit':'switcher_border_calc')}></div>
            </div>
        </div>
    );
};

export default ConstructorModEdit;
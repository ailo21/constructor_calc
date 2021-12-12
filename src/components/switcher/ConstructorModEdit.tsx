import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectEditMode, toggleEditMode } from '../../features/calculator/calculatorSlice';
import './switcher.css';

const ConstructorModEdit = () => {
  const dispatch = useAppDispatch();
  const isPromMode = useAppSelector(selectEditMode);
  const runtimeClass = ['mode', 'mode_runtime'];
  const constructorClass = ['mode', 'mode_constructor'];
  if (isPromMode) {
    runtimeClass.push('active');
  } else {
    constructorClass.push('active');
  }
  return (
    <div className="switcher_wrap">
      <div className="switcher">
        <button
          className={ runtimeClass.join(' ') }
          onClick={ () => dispatch(toggleEditMode()) }
          type="button"
        >
          <span>Runtime</span>
        </button>
        <button
          className={ constructorClass.join(' ') }
          onClick={ () => dispatch(toggleEditMode()) }
          type="button"
        >
          <span>Constructor</span>
        </button>

        <div className={ `switcher_border ${ isPromMode ? 'switcher_border_edit' : 'switcher_border_calc' }` } />
      </div>
    </div>
  );
};

export default ConstructorModEdit;

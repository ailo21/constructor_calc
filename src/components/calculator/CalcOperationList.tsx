import React, { FC } from 'react';
import CalcOperation from './CalcOperation';
import { OperationEnum } from '../../features/calculator/model/Operation';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addOperation, selectDisplayOperand1 } from '../../features/calculator/calculatorSlice';

const CalcOperationList : FC = () => {
  const dispatch = useAppDispatch();

  const operand1 = useAppSelector(selectDisplayOperand1);

  const clickHandlerOperation = (operation : OperationEnum) => {
    if (operand1 !== undefined) {
      dispatch(addOperation(operation));
    }
  };
  const operationList = [
    OperationEnum.fold,
    OperationEnum.subtract,
    OperationEnum.multiply,
    OperationEnum.division,
  ];

  return (
    <div className="calc_partial">
      <div className="row">
        {
          operationList.map((o) => (
            <CalcOperation
              key={ o }
              operation={ o }
              onClick={ () => clickHandlerOperation(o) }
            />
          ))
        }
      </div>
    </div>
  );
};

export default CalcOperationList;

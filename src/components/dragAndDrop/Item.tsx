import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CalcPartial, CalcPartialEnum } from '../../features/calculator/model/CalcPartial';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  deleteFromCalculator,
  selectEditMode,
  selectPartials,
} from '../../features/calculator/calculatorSlice';
import CalcNumbersList from '../calculator/CalcNumbersList';
import CalcEqual from '../calculator/CalcEqual';
import CalcDisplay from '../calculator/CalcDisplay';
import CalcOperationList from '../calculator/CalcOperationList';

interface ItemProps {
  text: string,
  index: number,
  partial: CalcPartial
}

const Item: FC<ItemProps> = ({ text, index, partial }) => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector(selectPartials);
  const isPromMode = useAppSelector(selectEditMode);

  const removeElement = (part: CalcPartial) => {
    if (!isPromMode) return null;
    // убедимся что двойной клик проищошел по элементу в правой колоне (в калькуляторе)
    if (!columns.calculator.list.some((s) => s.elementCalc === part.elementCalc)) return null;

    dispatch(deleteFromCalculator(part));
  };
  return (
    <Draggable draggableId={ text } index={ index }>
      { (provided) => (
        <div
          onDoubleClick={ () => removeElement(partial) }
          ref={ provided.innerRef }
          { ...provided.draggableProps }
          { ...provided.dragHandleProps }
        >

          {
            partial.elementCalc === CalcPartialEnum.CalcNumbers && <CalcNumbersList />
          }
          {
            partial.elementCalc === CalcPartialEnum.CalcDisplay && <CalcDisplay />
          }
          {
            partial.elementCalc === CalcPartialEnum.CalcEqual && <CalcEqual />
          }
          {
            partial.elementCalc === CalcPartialEnum.CalcOperationList && <CalcOperationList />
          }
        </div>
      ) }
    </Draggable>

  );
};

export default Item;

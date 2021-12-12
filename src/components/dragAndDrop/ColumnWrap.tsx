import React from 'react';
import {
  DragDropContext, DropResult,
} from 'react-beautiful-dnd';
import Column from './Column';
import {
  useAppDispatch, useAppSelector,
} from '../../app/hooks';
import {
  changePartials, PartCalc, selectEditMode, selectPartials,
} from '../../features/calculator/calculatorSlice';
import ConstructorModEdit from '../switcher/ConstructorModEdit';
import OpacityPlaceholder from '../calculator/OpacityPlaceholder';
import { CalcPartial } from '../../features/calculator/model/CalcPartial';

const ColumnWrap = () => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector(selectPartials);
  const isEditMode = useAppSelector(selectEditMode);

  const onDragEnd = ({ source, destination } : DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (source.droppableId === destination.droppableId && destination.index === source.index) {
      return null;
    }

    const start = columns[source.droppableId];
    const end = Object.assign([], columns[destination.droppableId]);
    if (end.id !== 'calculator') return null;

    if (start.id === end.id && end.id === 'calculator') {

    } else {
      const newStartList = start.list.filter(
        (_ : any, idx : number) => idx !== source.index,
      );

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = Object.assign([], end.list);

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // обеспечим появление дисплея строго в первой позиции
      if (newEndList.some((s : CalcPartial) => (s.elementCalc === 'CalcDisplay'))) {
        const displayIndex = newEndList.findIndex((f : CalcPartial) => f.elementCalc === 'CalcDisplay');
        const temp = newEndList.splice(displayIndex, 1);
        newEndList.splice(0, 0, temp[0]);
      }

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      dispatch(changePartials({
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      } as PartCalc));
      return null;
    }
  };

  return (
    <div className={ isEditMode ? 'mode mode__constructor' : 'mode mode__calculator' }>
      <ConstructorModEdit />
      <DragDropContext onDragEnd={ onDragEnd }>
        <div
          className="drag_columns"
        >
          <div className="constructor_area">
            <OpacityPlaceholder />

            <Column col={ columns.arialDisplay } key={ columns.arialDisplay.id } />
            <Column col={ columns.ariaOperation } key={ columns.ariaOperation.id } />
            <Column col={ columns.arialNumbers } key={ columns.arialNumbers.id } />
            <Column col={ columns.ariaEqual } key={ columns.ariaEqual.id } />
          </div>
          <div>
            <Column col={ columns.calculator } key={ columns.calculator.id } />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default ColumnWrap;

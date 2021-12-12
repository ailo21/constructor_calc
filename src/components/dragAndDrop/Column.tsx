import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';
import Placeholder from './Placeholder';
import { CalcPartial } from '../../features/calculator/model/CalcPartial';

interface ColumnProps {
  col : {
    id : any
    list? : CalcPartial[]
    item? : CalcPartial
  }
}

const Column : FC<ColumnProps> = ({ col: { list, id } }) =>
  (
    <Droppable droppableId={ id }>
      { (provided) => (

        <div
          className={ `column column_${ id }` }
        >
          <div
            style={ {
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            } }
            { ...provided.droppableProps }
            ref={ provided.innerRef }
          >
            { list?.map((partial, index) => (
              <Item partial={ partial } key={ partial.sort } text={ partial.elementCalc } index={ index } />
            )) }

            { id === 'calculator' && <Placeholder /> }
          </div>
        </div>
      ) }
    </Droppable>);
export default Column;

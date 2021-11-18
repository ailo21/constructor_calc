import React, {useEffect, useState} from 'react';
import Column from "./Column";
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import {CalcPartial} from "../features/calculator/model/CalcPartial";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {changePartials, PartCalc, selectPartials} from "../features/calculator/calculatorSlice";

const ColumnWrap = () => {
    const dispatch = useAppDispatch();
    const columns = useAppSelector(selectPartials);

    const onDragEnd = ({source, destination}: DropResult) => {

        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null

        // Make sure we're actually moving the item
        if (
            source.droppableId === destination.droppableId &&
            destination.index === source.index
        )
            return null
if(columns!=null){

}
        const start = columns[source.droppableId]
        const end = Object.assign([], columns[destination.droppableId]);

        // If start is the same as end, we're in the same column
        if (start === end) {
            // Move the item within the list
            // Start by making a new list without the dragged item
            let newList = start.list.filter(
                (_: any, idx: number) => idx !== source.index
            )

            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.list[source.index])

            // Then create a new copy of the column object
            const newCol = {
                id: start.id,
                list: newList
            }

            // Update the state
            debugger;
            // setColumns(state => ({...state, [newCol.id]: newCol}))
            dispatch(changePartials({
                [newList.id]: newList,
                [newCol.id]: newCol
            } as PartCalc))
            return null
        } else {
            // If start is different from end, we need to update multiple columns
            // Filter the start list like before
            const newStartList = start.list.filter(
                (_: any, idx: number) => idx !== source.index
            )

            // Create a new start column
            const newStartCol = {
                id: start.id,
                list: newStartList
            }

            // Make a new end list array
            const newEndList =Object.assign([], end.list);



            // Insert the item into the end list
            newEndList.splice(destination.index, 0, start.list[source.index])

            // Create a new end column
            const newEndCol = {
                id: end.id,
                list: newEndList
            }

            debugger;
            // Update the state
            dispatch(changePartials({
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol
            } as PartCalc))

            return null
        }

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    margin: '24px auto',
                    gap: '15px'
                }}
            >

                <Column col={columns["constructor"]} key={columns["constructor"].id}/>
                <Column col={columns["calculator"]} key={columns["calculator"].id}/>

            </div>

        </DragDropContext>
    )
};

export default ColumnWrap;
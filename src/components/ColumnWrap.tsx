import React, {useEffect, useState} from 'react';
import Column from "./Column";
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import {CalcPartial} from "../features/calculator/model/CalcPartial";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {changePartials, PartCalc, selectEditMode, selectPartials} from "../features/calculator/calculatorSlice";
import ConstructorModEdit from "./switcher/ConstructorModEdit";

const ColumnWrap = () => {
    const dispatch = useAppDispatch();
    const columns = useAppSelector(selectPartials);
    const isEditMode = useAppSelector(selectEditMode);


    const onDragEnd = ({source, destination}: DropResult) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null

        // Make sure we're actually moving the item
        if (
            source.droppableId === destination.droppableId &&
            destination.index === source.index
        )
            return null
        if (columns != null) {

        }
        const start = columns[source.droppableId]
        const end = Object.assign([], columns[destination.droppableId]);
        if(end.id!='calculator')return  null;


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

         // debugger;
        // Update the state
        dispatch(changePartials({
            [newStartCol.id]: newStartCol,
            [newEndCol.id]: newEndCol
        } as PartCalc))


    }

    return (
        <div className={isEditMode ? "mode mode__constructor" : "mode mode__calculator"}>
            <ConstructorModEdit/>
            <DragDropContext onDragEnd={onDragEnd}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        margin: '24px auto',
                        gap: '15px'
                    }}
                >
                    <div>
                        <Column col={columns["constructor"]} key={columns["constructor"].id}/>
                    </div>
                    <div>
                        <Column col={columns["calculator"]} key={columns["calculator"].id}/>
                    </div>


                </div>

            </DragDropContext>
        </div>

    )
};

export default ColumnWrap;
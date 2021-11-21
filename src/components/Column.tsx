import React, {FC} from 'react';
import Item from "./Item";
import {Droppable} from "react-beautiful-dnd";
import Placeholder from "./Placeholder";
import {CalcPartial} from "../features/calculator/model/CalcPartial";

interface ColumnProps {
    col: {
        id: any
        list: CalcPartial[]
    }
}

const Column: FC<ColumnProps> = ({col: {list, id}}) => {
    return (
        <Droppable droppableId={id} >
            {provided => (
                <div
                    className={"column column_"+id}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {list.map((partial, index) => (
                            <Item partial={partial}  key={partial.sort} text={partial.elementCalc} index={index}/>
                        ))}
                        {provided.placeholder && <Placeholder/>}

                    </div>
                </div>
            )}


        </Droppable>
    );
};

export default Column;
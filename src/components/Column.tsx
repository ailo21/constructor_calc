import React, {FC} from 'react';
import Item from "./Item";
import {Droppable} from "react-beautiful-dnd";
import Placeholder from "./Placeholder";

interface ColumnProps {
    col: {
        id: any
        list: string[]
    }
}

const Column: FC<ColumnProps> = ({col: {list, id}}) => {
    return (
        <Droppable droppableId={id}>
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
                        {list.map((text, index) => (
                            <Item key={text} text={text} index={index}/>
                        ))}
                        {provided.placeholder && <Placeholder/>}

                    </div>
                </div>
            )}


        </Droppable>
    );
};

export default Column;
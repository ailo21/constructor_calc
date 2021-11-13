import React, {FC} from 'react';
import {Draggable} from "react-beautiful-dnd";

interface ItemProps {
    text: string,
    index: number
}

const Item: FC<ItemProps> = ({text,index}) => {
    return (
        <Draggable draggableId={text} index={index}>
            {provided => (
                <div
                    className={"item"}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {text}
                </div>
            )}
        </Draggable>

    );
};

export default Item;
import React, {FC} from 'react';
import Item from "./Item";
import {Droppable} from "react-beautiful-dnd";
import Placeholder from "./Placeholder";
import {CalcPartial, CalcPartialEnum} from "../features/calculator/model/CalcPartial";

interface ColumnProps {
    col: {
        id: any
        list?: CalcPartial[]
        item?: CalcPartial
    }
}

const Column: FC<ColumnProps> = ({col: {list,item, id}}) => {

    return (
        <Droppable droppableId={id}>
            {provided => (

                <div
                    className={"column column_" + id}
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
                        {list?.map((partial, index) => (
                            <Item partial={partial} key={partial.sort} text={partial.elementCalc} index={partial.sort}/>
                        ))}
                        {
                            item!=undefined &&
                            <Item partial={item} key={item.sort} text={item.elementCalc} index={item.sort}/>
                        }

                        {id == 'calculator' && <Placeholder/>}

                    </div>
                </div>
            )}


        </Droppable>
    );
};

export default Column;
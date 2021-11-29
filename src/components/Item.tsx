import React, {FC} from 'react';
import {Draggable} from "react-beautiful-dnd";
import {CalcPartial, CalcPartialEnum} from "../features/calculator/model/CalcPartial";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {changePartials, PartCalc, selectPartials} from "../features/calculator/calculatorSlice";
import CalcNumbersList from "./calculator/CalcNumbersList";
import CalcEqual from "./calculator/CalcEqual";
import CalcDisplay from "./calculator/CalcDisplay";
import CalcOperationList from "./calculator/CalcOperationList";

interface ItemProps {
    text: string,
    index: number,
    partial: CalcPartial
}

const Item: FC<ItemProps> = ({text, index, partial}) => {
    const dispatch = useAppDispatch();
    const columns = useAppSelector(selectPartials);

    const removeElement = (part: CalcPartial) => {
        // if (columns.constructor.list.some(s => s.elementCalc == part.elementCalc)) return null;
        //
        // //убираем элемент из калькулятора
        // let listCalc = columns.calculator.list.filter(f => f.elementCalc !== part.elementCalc);
        // let listConst = [...columns.constructor.list, part];
        // dispatch(changePartials({
        //     constructor: {
        //         id: "constructor",
        //         list: listConst
        //     },
        //     calculator: {
        //         id: "calculator",
        //         list: listCalc
        //     }
        // } as PartCalc))
    }
    return (
        <Draggable draggableId={text} index={index}>
            {provided => (
                <div
                    className={"calc_partial"}
                    onDoubleClick={() => removeElement(partial)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >

                    {
                        partial.elementCalc === CalcPartialEnum.CalcNumbers && <CalcNumbersList/>
                    }
                    {
                        partial.elementCalc === CalcPartialEnum.CalcDisplay && <CalcDisplay/>
                    }
                    {
                        partial.elementCalc === CalcPartialEnum.CalcEqual && <CalcEqual/>
                    }
                    {
                        partial.elementCalc === CalcPartialEnum.CalcOperationList && <CalcOperationList/>
                    }
                </div>
            )}
        </Draggable>

    );
};

export default Item;
import React, {FC} from 'react';
interface Props {
    onClick : () => void
}
const CalcPoint:FC<Props> = ({onClick}) => {
    return (
        <button className={'num'} onClick={() => {
            onClick()
        }}>
            {','}
        </button>
    );
};

export default CalcPoint;
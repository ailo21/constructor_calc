import React, {FC} from 'react';

interface Props {
    num: number,
    onClick : (num:number) => void
}

const CalcNumber: FC<Props> = ({num,onClick}) => {
    return (
        <button className={'num'} onClick={() => {
            onClick(num)
        }}>
            {num}
        </button>
    );
};

export default CalcNumber;
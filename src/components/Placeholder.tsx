import React from 'react';
import { ReactComponent as PlaceholderSvg } from '../asset/icon/icon_image.svg';

const Placeholder = () => {
    return (
        <div className={"placeholder"}>
            <PlaceholderSvg/>
            <div className={"placeholder_text"}>
                <div><span className={"font_blue"}>Drag and drop</span></div>
                <div><span className={"font_small"}>Drag and drop</span></div>
            </div>
        </div>
    );
};

export default Placeholder;
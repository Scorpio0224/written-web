import * as React from 'react';
import './Line.less';

interface LinePropsType {
    children: React.ReactNode;
}

const Line: React.FC<LinePropsType> = (props) => {
    const { children } = props;

    return (
        <div className="line-box">{children}</div>
    )
}

export default Line;

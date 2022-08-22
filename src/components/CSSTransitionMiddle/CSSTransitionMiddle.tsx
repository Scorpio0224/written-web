import * as React from 'react';
import './CSSTransitionMiddle.less';
import { CSSTransition } from 'react-transition-group';

interface CSSTransitionPropsType {
    visiable: boolean;
    children: React.ReactNode;
    name: string;
    timeout?: number
}

const CSSTransitionMiddle: React.FC<CSSTransitionPropsType> = (props) => {
    const { visiable, children, name, timeout } = props;
    return (
        <CSSTransition
            in={visiable}
            timeout={timeout || 1000}
            classNames={name}
            unmountOnExit
        >
            {children}
        </CSSTransition >
    )
}

export default CSSTransitionMiddle;

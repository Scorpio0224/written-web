import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import './Line.less';

interface LinePropsType {
    children: React.ReactNode;
    isInview?: (param: boolean) => void;
    position?: number;
    range?: number;
}

const Line: React.FC<LinePropsType> = (props) => {
    const { children, isInview, position, range } = props;

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    React.useEffect(() => {
        if(position) {
            isInview?.(inView);
        };
        console.log(children);
    }, [inView]);

    return (
        <div className="line-box">
            {isInview ? <div className="inview" style={{top: `${position}%`, height: `${range}%`}} ref={ref} /> : null}
            {children}
        </div>
    )
}

export default Line;

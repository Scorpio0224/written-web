import * as React from 'react';
import './ContentTitle.less';
import { CSSTransition } from 'react-transition-group';

const ContentTitle: React.FC = () => {
    const [visiable, setVisiable] = React.useState(false);

    React.useEffect(() => {
        setVisiable(true);
    }, []);

    return (
        <div className="content-title-box">
            <CSSTransition
                in={visiable}
                timeout={1000}
                classNames="alert"
                mountOnEnter
            >
                <div className="content-title">
                    Written   A software of markdown edit made by
                </div>
            </CSSTransition>
        </div>
    )
}

export default ContentTitle;

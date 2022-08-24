import * as React from 'react';
import ContentTitle from '../ContentTitle/ContentTitle';
import CSSTransitionMiddle from '../CSSTransitionMiddle/CSSTransitionMiddle';
import homepage from '../../images/homepage.svg';
import './Transition.less';

interface TransitionTypeProps {
    visiable: boolean;
}

const Transition: React.FC<TransitionTypeProps> = (props) => {
    const { visiable } = props;

    return (
        <div className='transition-box'>
            <CSSTransitionMiddle visiable={visiable} name="alert" >
                <div className="context">
                    <div className='download-context'>
                        <ContentTitle 
                            context='Download'
                            fontSize={100}
                            name='black'
                        />
                        <ContentTitle
                            context='macOS package'
                            fontSize={70}
                            name='gray'
                        />
                    </div>
                    <div className='written-homepage'>
                        <img src={homepage} alt="" className='homepage-en' />
                    </div>
                </div>
            </CSSTransitionMiddle>
            <CSSTransitionMiddle visiable={visiable} timeout={2000} name="alert-slow">
                <div className='process-box'>
                    <div className='top'/>
                    <div className='bottom'/>
                </div>
            </CSSTransitionMiddle>
        </div>
    )
}

export default Transition;

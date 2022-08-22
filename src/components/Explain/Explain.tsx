import * as React from 'react';
import ContentTitle from '../ContentTitle/ContentTitle';
import CSSTransitionMiddle from '../CSSTransitionMiddle/CSSTransitionMiddle';
import './Explain.less';
import Typing from '../Typing/Typing';
import stepImg from '../../images/yarn-step-img.svg';

const explainText = 'Currently, only MAC M1 and inter versions are supported, Windows version is not adapted yet, but it can be run. Please refer to the left apprentice for the running steps';

interface ExplainPropsType {
    visiable: boolean;
};

const commands = [
    'git clone https://gitee.com/liuyang0316/written.git',
    'cd written',
    'yarn',
    'yarn start'
]

const Explain: React.FC<ExplainPropsType> = (props) => {
    const {visiable} = props;

    return (
        <div className="explain-box">
            <CSSTransitionMiddle visiable={visiable} name='from-left'>
                <div className='explain-context'>
                    <img src={stepImg} alt="step" />
                    <div className='step-box'>
                        {
                            commands.map((item: string) => {
                                return (
                                <div className='command'>
                                    <span>
                                        written ~ $ &nbsp;
                                    </span>
                                        {item}
                                </div>
                                )
                            })
                        }
                        <div className='command'>
                            <span className='type'>
                                written ~ $
                            </span>
                        </div>
                    </div>
                </div>
            </CSSTransitionMiddle>
            <CSSTransitionMiddle visiable={visiable} name='from-right'>
                <div className='context-box'>
                    <div className='explain-title'>
                        <ContentTitle fontSize={50} context='Windows is in plan' name='blue'/>
                    </div>
                    <ContentTitle fontSize={24} context={explainText} name='gray'/>
                </div>
            </CSSTransitionMiddle>
        </div>
    );
}

export default Explain;

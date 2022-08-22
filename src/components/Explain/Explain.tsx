import * as React from 'react';
import ContentTitle from '../ContentTitle/ContentTitle';
import CSSTransitionMiddle from '../CSSTransitionMiddle/CSSTransitionMiddle';
import './Explain.less';
import Typing from '../Typing/Typing';
import stepImg from '../../images/yarn-step-img.svg';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

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
                    <ContentTitle fontSize={24} context={t('Windows')} name='gray'/>
                </div>
            </CSSTransitionMiddle>
        </div>
    );
}

export default Explain;

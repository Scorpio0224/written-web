import * as React from 'react';
import ContentTitle from '../ContentTitle/ContentTitle';
import CSSTransitionMiddle from '../CSSTransitionMiddle/CSSTransitionMiddle';
import mbp from '../../images/MacBook.svg';
import imac from '../../images/iMac.svg';
import m1 from '../../public/written-1.0.1.pkg';
import inter from '../../public/written-1.0.1.pkg';
import './Download.less';
import { useTranslation } from 'react-i18next';

interface DownloadPropsType {
    visiable: boolean;
} 

const Download: React.FC<DownloadPropsType>  = (props) => {
    const { visiable } = props;

    const { t } = useTranslation();

    return (
        <div className='download'>
            <div className="title">
                <CSSTransitionMiddle visiable={visiable} name="alert" >
                    <div className="title-explain">
                    <ContentTitle context='Ready player two.' name='red'/>
                        <ContentTitle context='Download pkg of macOS M1 and macOS inter' fontSize={40} name='black'/>
                    </div>
                </CSSTransitionMiddle>
            </div>
            <div className="download-item">
                <CSSTransitionMiddle visiable={visiable} name="from-left" >
                    <div className="left">
                        {/* <DownloadBtn version="Written 1.0.1 command 2022-02-21" /> */}
                        <img src={mbp} alt="m1" />
                    </div>
                </CSSTransitionMiddle>
                <CSSTransitionMiddle visiable={visiable} name="from-right" >
                    <div className="right">
                        <ContentTitle fontSize={40} context='Mac M1 V1.0.1' name='purple'/>
                        <ContentTitle fontSize={30} context={t("Apply")} name='black'/>
                        <a href={m1}>{t('Download')} &gt;</a>
                    </div>
                </CSSTransitionMiddle>
                <CSSTransitionMiddle visiable={visiable} name="from-left" >
                    <div className="right">
                        <ContentTitle fontSize={40} context='Mac inter V1.0.1' name='origin'/>
                        <ContentTitle fontSize={30} context={t("Apply")} name='black'/>
                        <a href={inter}>{t('Download')} &gt;</a>
                    </div>
                </CSSTransitionMiddle>
                <CSSTransitionMiddle visiable={visiable} name="from-right" >
                    <div className="left">
                        {/* <DownloadBtn version="Written 1.0.1 command 2022-02-21" /> */}
                        <img src={imac} alt="m1" />
                    </div>
                </CSSTransitionMiddle>
            </div>
        </div>
    )
}

export default Download;

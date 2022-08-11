import './TopNav.less';
import react, { useState } from 'react';
import writtenLogo from '../../images/written.svg';
import { useTranslation } from 'react-i18next';

const TopNav = () => {
    // const handleClick = () => {
    //     location.href = '../../assets/written-1.0.1.dmg';
    // }

    const {t, i18n} = useTranslation();

    const [currentLng, setCurrentLng] = useState('en');

    const changeLng = () => {
        const { language } = i18n;

        const lng = language === 'en' ? 'zh' : 'en';

        setCurrentLng(lng);

        i18n.changeLanguage(lng);
    }

    return (
        <div className="top-nav-box">
            <img src={writtenLogo} alt="logo" />
            {/* <a download href="../../public/dashboard-bgc-color.svg">Download</a> */}
            <div className='top-nav-lng' onClick={changeLng}>{currentLng === 'zh' ? "简体中文" : "English"}</div>
        </div>
    )
};

export default TopNav;
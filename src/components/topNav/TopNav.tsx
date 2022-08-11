import './TopNav.less';
import react from 'react';
import writtenLogo from '../../images/written.svg';

const TopNav = () => {
    const handleClick = () => {
        location.href = '../../assets/written-1.0.1.dmg';
    }

    return (
        <div className="top-nav-box">
            <img src={writtenLogo} alt="logo" />
            <a download href="../../public/dashboard-bgc-color.svg">Download</a>
        </div>
    )
};

export default TopNav;
import './TopNav.less';
import react from 'react';
import writtenLogo from '../../images/written.svg';

const TopNav = () => {
    return (
        <div className="top-nav-box">
            <img src={writtenLogo} alt="logo" />
        </div>
    )
};

export default TopNav;
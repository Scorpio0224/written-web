import TopNav from '@/components/topNav/TopNav';
import Typing from '@/components/Typing/Typing';
import ContentTitle from '@/components/ContentTitle/ContentTitle';
import Line from '@/components/Line/Line';
import Context from '@/components/Context/Context';
import Dashboard from '@/components/Dashboard/Dashboard';
import './index.global.less';
import '../i18n/index';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [dashboardShow, setBoardShow] = useState(false);

  return (
    <div>
      <TopNav />
      <div className='content-box'>
        <ContentTitle />
        <Line> 
          <Context />
        </Line>
        <Line position={40} isInview={setBoardShow} range={30} > 
          <Dashboard visiable={dashboardShow} />
        </Line>
        {/* <Line> 
          <Typing />
        </Line> */}
      </div>
    </div>
  );
}

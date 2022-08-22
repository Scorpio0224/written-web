import TopNav from '@/components/topNav/TopNav';
import Typing from '@/components/Typing/Typing';
import ContentTitle from '@/components/ContentTitle/ContentTitle';
import Line from '@/components/Line/Line';
import Context from '@/components/Context/Context';
import Dashboard from '@/components/Dashboard/Dashboard';
import './index.global.less';
import '../i18n/index';
import { useEffect, useState } from 'react';
import Explain from '@/components/Explain/Explain';
// import { useMouse } from 'ahooks';
// import favico from '../images/written.svg';
import Download from '@/components/Download/Download';

export default function HomePage() {
  const [dashboardShow, setBoardShow] = useState(false);

  const [explain, setExplain] = useState(false);

  const [downloadVisi, setDownloadVisi] = useState(false);
  // const state: {
  //   pageX: number,
  //   pageY: number,
  // } = useMouse();

  // const visiable = () => {
  //   const isShow = (state.pageX > 0 || state.pageY > 0) && state.pageX && state.pageY;

  //   return isShow ? 1 : 0;
  // }

  return (
    <div>
      {/* <div className='mouse-box' style={{top: `${state.pageY}px`, left: `${state.pageX}px`, opacity: visiable()}}>
        <img src={favico} alt="" />
      </div> */}
      <TopNav />
      <div className='content-box'>
        <div className="context-title-box">
          <ContentTitle context="A surprise for your README document" name='blue' width={65} />
        </div>
        <Line> 
          <Context />
        </Line>
        <Line position={40} isInview={setBoardShow} range={30} > 
          <Dashboard visiable={dashboardShow} />
        </Line>
        <Line position={60} isInview={setExplain} range={30} >
          <Explain visiable={explain} />
        </Line>
      </div>
      <div className='download-box'>
        <Line position={50} isInview={setDownloadVisi} range={20} > 
          <Download visiable={downloadVisi} />
        </Line>
      </div>
    </div>
  );
}

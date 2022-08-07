import TopNav from '@/components/topNav/TopNav';
import Typing from '@/components/Typing/Typing';
import ContentTitle from '@/components/ContentTitle/ContentTitle';
import Line from '@/components/Line/Line';
import Context from '@/components/Context/Context';
import './index.global.less';

export default function HomePage() {
  return (
    <div>
      <TopNav />
      <div className='content-box'>
        <ContentTitle />
        <Line> 
          <Context />
        </Line>
        <Line> 
          <Typing />
        </Line>
      </div>
    </div>
  );
}

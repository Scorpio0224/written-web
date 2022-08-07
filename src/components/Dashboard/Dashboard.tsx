import * as React from 'react';
import bgcImg from '../../images/dashboard-bgc-color.svg';
import writtenDashboard from '../../images/written-dashboard.png'
import { CSSTransition } from 'react-transition-group';
import Typing from '../Typing/Typing';
import './Dashboard.less';

const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

const code = `# 赴京
- [明]于谦
~~~
拔剑舞中庭，
浩歌振林峦！
丈夫意如此，
不学腐儒酸。
~~~`

interface DashboardPropType {
    visiable: boolean;
}

const Dashboard: React.FC<DashboardPropType> = (props) => {
    const { visiable } = props;

    const [origin, setOrigin] = React.useState('');

    const [res, setRes] = React.useState('');

    React.useEffect(() => {
        setRes(`<pre>${md.render(origin)}</pre>`);
    }, [origin]);

    return (
        <div className="dashboard-box">
            <img src={bgcImg} className="dashboard-bgc" />
            <CSSTransition
                in={visiable}
                timeout={1000}
                classNames="alert"
                unmountOnExit
            >
                <div className="written-box">
                    <div className='written-page'>
                        <div className="header">
                            <div className="file-name">
                                未命名
                                <span className='file-state'>
                                    {/* - 已编辑 */}
                                </span>
                            </div>
                        </div>
                        <div className="left">
                            <Typing code={code} setRes={setOrigin} />
                        </div>
                        <div className="right"
                            dangerouslySetInnerHTML={{ __html: res }}
                        />
                        <div className="footer"></div>
                    </div>
                    <img src={writtenDashboard} className='written-dashboard' alt="" />
                </div>
            </CSSTransition>
        </div>
    )
}

export default Dashboard;
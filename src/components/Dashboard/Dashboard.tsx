import * as React from 'react';
import { useTranslation } from 'react-i18next';
import bgcImg from '../../images/dashboard-bgc-color.svg';
import writtenDashboard from '../../images/written-dashboard.png'
// import { CSSTransition } from 'react-transition-group';
import CSSTransitionMiddle from '../CSSTransitionMiddle/CSSTransitionMiddle';
import Typing from '../Typing/Typing';
import './Dashboard.less';

const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();

// const code = `# 赴京
// - [明]于谦
// ~~~
// 拔剑舞中庭，
// 浩歌振林峦！
// 丈夫意如此，
// 不学腐儒酸。
// ~~~`

const code = `
# written
*written是一款用于编辑markdown文档的跨平台桌面端应用程序*
## 技术栈
- HTML、CSS、Typescript
- electron
- React
## GitHub地址
[https://gitee.com/liuyang0316/written.git](https://gitee.com/liuyang0316/written.git)
## 源码使用教程
1. clone
2. yarn
3. yarn start
## 参与贡献
1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request`

interface DashboardPropType {
    visiable: boolean;
}

const Dashboard: React.FC<DashboardPropType> = (props) => {
    const { visiable } = props;

    const [origin, setOrigin] = React.useState('');

    const [res, setRes] = React.useState('');

    const [edited, setEdited] = React.useState(false);

    const leftRef = React.useRef<HTMLDivElement>(null);

    const rightRef = React.useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    React.useEffect(() => {
        setRes(`<pre>${md.render(origin)}</pre>`);
        const { current } = rightRef;
        const { current: leftCurrent } = leftRef;
        setEdited(true);
        if (current && leftCurrent) {
            current.scrollTop = current.scrollHeight;
            leftCurrent.scrollTop = leftCurrent.scrollHeight;
        }
    }, [origin]);

    return (
        <div className="dashboard-box">
            <img src={bgcImg} className="dashboard-bgc" />
            <CSSTransitionMiddle
                visiable={visiable}
                timeout={1000}
                name="alert"
            >
                <div className="written-box">
                    <div className='written-page'>
                        <div className="header">
                            <div className="file-name">
                                <div className='file-name-content'>
                                    未命名
                                </div>
                                <span className='file-state'>
                                    - 已编辑
                                </span>
                            </div>
                        </div>
                        <div className="left" ref={leftRef}>
                            <Typing code={code} setRes={setOrigin} />
                        </div>
                        <div className="right"
                            ref={rightRef}
                            dangerouslySetInnerHTML={{ __html: res }}
                        />
                        <div className="footer">
                            {origin.length} 字符
                        </div>
                    </div>
                    <img src={writtenDashboard} className='written-dashboard' alt="" />
                </div>
            </CSSTransitionMiddle>
        </div>
    )
}

export default Dashboard;
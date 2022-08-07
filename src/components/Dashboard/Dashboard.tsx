import * as React from 'react';
import bgcImg from '../../images/dashboard-bgc-color.svg';
import writtenDashboard from '../../images/written-dashboard.png'
import { CSSTransition } from 'react-transition-group';
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

const code = `# Written-Web
#### 介绍
Written官网
#### 软件架构
软件架构说明
#### 安装教程
1.  xxxx
2.  xxxx
3.  xxxx
#### 参与贡献
1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
#### 特技
1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
`

interface DashboardPropType {
    visiable: boolean;
}

const Dashboard: React.FC<DashboardPropType> = (props) => {
    const { visiable } = props;

    const [origin, setOrigin] = React.useState('');

    const [res, setRes] = React.useState('');

    const leftRef = React.useRef(null);

    const rightRef = React.useRef(null);

    React.useEffect(() => {
        setRes(`<pre>${md.render(origin)}</pre>`);
        const { current } = rightRef;
        const { current: leftCurrent } = leftRef;
        if (current) {
            current.scrollTop = current.scrollHeight;
            leftCurrent.scrollTop = leftCurrent.scrollHeight;
        }
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
                        <div className="left" ref={leftRef}>
                            <Typing code={code} setRes={setOrigin} />
                        </div>
                        <div className="right"
                            ref={rightRef}
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
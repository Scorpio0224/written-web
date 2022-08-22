import * as React from 'react';
import './DownloadBtn.less'

interface DownloadBtnPropsType {
    version: string;
}

const DownloadBtn: React.FC<DownloadBtnPropsType> = (props) => {
    const { version } = props;

    return (
        <div className="download-btn-box">
            <div className="top-nav">
                {version}
                <a href="">点击下载</a>
            </div>
            <div className="btn-context">
                版本信息
                <ul>
                    <li>修复快捷键失效问题</li>
                    <li>修复本地存储数据问题</li>
                    <li>增加多个组件动画</li>
                </ul>
            </div>
        </div>
    )
}

export default DownloadBtn;

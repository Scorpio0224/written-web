import * as React from 'react';
import './ContentTitle.less';

interface ContentTitleProps {
    context: string;
    name: string;
    fontSize?: number;
    width?: number;
}

const ContentTitle: React.FC<ContentTitleProps> = (props) => {
    const { context, name, fontSize, width } = props;

    return (
        <div className="content-title-box">
            <div className={`content-title ${name}`} style={{fontSize: `${fontSize || 64}px`, width: `${width}%`}}>
                {context}
            </div>
        </div>
    )
}

export default ContentTitle;

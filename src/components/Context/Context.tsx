import * as React from 'react';
import './Context.less';

const context = 'A software of markdown edit made by Electron,Typescript and React'
const copyRight = '©️ CopyRight 2022'
const author = 'ly2548190794@163.com'

const Context : React.FC<any> = () => {
    return <div className='context-box'>
        {context}
        <br />
        <b>
            {copyRight}
        </b>
        <br />
        <b>
            {author}
        </b>
        <br />
        <a href="javascript:;">GitHub For Written &gt;</a>
    </div>
}

export default Context;

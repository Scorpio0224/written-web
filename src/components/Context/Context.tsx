import * as React from 'react';
import './Context.less';
import { useTranslation } from 'react-i18next'

const context = ''
const copyRight = '©️ CopyRight 2022'
const author = 'ly2548190794@163.com'

const Context : React.FC<any> = () => {
    const {t} = useTranslation();

    return <div className='context-box'>
        {t('WrittenInfo')}
        <br />
        <b>
            {copyRight}
        </b>
        <br />
        <b>
            {author}
        </b>
        <br />
        <a href="https://gitee.com/liuyang0316/written.git" target="_black">{t('GitHub')} &gt;</a>
    </div>
}

export default Context;

import * as React from 'react';
import './Typing.less';

const code = `
const Typing: React.FC = () => {
    const [data, setData] = React.useState('');

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            setData(data + code.split('')[count]);
            if( count < code.length ) {
                setCount(count + 1)
            } else {
                setCount(0);
            }
        }, 100);
    }, [data])

    return (
        <div className="ui-typing-box">
            <pre>
              {data}
            </pre>
        </div>
    )
}

export default Typing;
`

const Typing: React.FC = () => {
    const [data, setData] = React.useState('');

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            if( count < code.length ) {
                setData(data + code.split('')[count]);
                setCount(count + 1)
            } else {
                setData('');
                setCount(0);
            }
        }, Math.floor(Math.random() * 200));
    }, [data])

    return (
        <div className="ui-typing-box">
            <pre>
              {data}
            </pre>
        </div>
    )
}

export default Typing;